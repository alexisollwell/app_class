import 'dart:convert';
import 'package:cesunapp/Models/api_response.dart';
import 'package:cesunapp/models/activity.dart';
import 'package:cesunapp/models/authentication.dart';
import 'package:cesunapp/models/service.dart';
import 'package:cesunapp/models/service_progress.dart';
import 'package:cesunapp/models/user.dart';
import 'package:cookie_jar/cookie_jar.dart';
import 'package:dio/dio.dart';
import 'package:dio_cookie_manager/dio_cookie_manager.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';

class ApiService {
  static String get _baseUrl => dotenv.env['API_BASE_URL']!;
  final Dio _dio;
  final CookieJar _cookieJar;

  // Contructor para inicializar el servicio
  ApiService() : _dio = Dio(), _cookieJar = CookieJar() {
    _dio.interceptors.add(CookieManager(_cookieJar));
  }

  // Solicitudes GET
  Future<Response> get(String endpoint) async {
    return await _dio.get('$_baseUrl$endpoint');
  }

  // Solicitudes POST
  Future<Response> post(String endpoint, Map<String, dynamic> data) async {
    return await _dio.post(
      '$_baseUrl$endpoint',
      data: jsonEncode(data),
      options: Options(headers: {'Content-Type': 'application/json'}),
    );
  }

  // Realiza una solicitud de login y devuelve
  Future<ApiResponse<Authentication>> login(User user) async {
    final response = await post('auth/login', user.toJson());
    final responseData = response.data is String
        ? jsonDecode(response.data)
        : response.data;
    return ApiResponse<Authentication>.fromJson(
      responseData,
      (d) => Authentication.fromJson(d),
    );
  }

  // Registrar un servicio
  Future<ApiResponse<String>> uploadService(Service service) async {
    final response = await post('service/serviceUpload', service.toJson());
    final responseData = response.data is String
        ? jsonDecode(response.data)
        : response.data;
    return ApiResponse<String>.fromJson(responseData, (d) => d.toString());
  }

  // Obtiene los servicios del usuario
  Future<ApiResponse<List<ServiceProgress>>> getUserServices() async {
    final response = await get('service/userServices');
    final responseData = response.data is String
        ? jsonDecode(response.data)
        : response.data;
    return ApiResponse<List<ServiceProgress>>.fromJson(
      responseData,
      (d) => (d as List)
          .map((item) => ServiceProgress.fromJson(item as Map<String, dynamic>))
          .toList(),
    );
  }

  // Sube una actividad de servicio
  Future<ApiResponse<String>> uploadActivity(
    List<Activity> activities,
    int serviceId,
  ) async {
    final activitiesJson = activities.map((a) => a.toJson()).toList();
    print("activities $activitiesJson");
    final response = await _dio.post(
      '$_baseUrl'
      'activities/uploadActivities',
      data: jsonEncode(activitiesJson),
      options: Options(
        headers: {
          'Content-Type': 'application/json',
          'serviceId': serviceId.toString(),
        },
      ),
    );
    final responseData = response.data is String
        ? jsonDecode(response.data)
        : response.data;
    return ApiResponse<String>.fromJson(responseData, (d) => d.toString());
  }
}
