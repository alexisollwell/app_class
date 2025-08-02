import 'package:cesunapp/Services/api_service.dart';
import 'package:cesunapp/models/activity.dart';
import 'package:flutter/material.dart';
import 'package:cesunapp/pages/servicios/servicio_social_screen.dart';

class FormularioActividadServicioSocial extends StatefulWidget {
  const FormularioActividadServicioSocial({super.key});

  @override
  State<FormularioActividadServicioSocial> createState() =>
      _FormularioActividadServicioSocialState();
}

class _FormularioActividadServicioSocialState
    extends State<FormularioActividadServicioSocial> {
  final _formKey = GlobalKey<FormState>();

  final ApiService _apiService = ApiService();

  final fechaController = TextEditingController();
  final horasController = TextEditingController();
  final descripcionController = TextEditingController();

  int serviceId = 2;

  Future<void> _uploadActivities() async {
    if (_formKey.currentState!.validate()) {
      // Construye el objeto Activity con los datos del formulario
      final activity = Activity(
        postingDate: fechaController.text,
        hours: int.tryParse(horasController.text) ?? 0,
        description: descripcionController.text,
      );

      // Llama a apiService
      final response = await _apiService.uploadActivity([activity], serviceId);
      
      if (response.success) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Datos guardados correctamente')),
        );
      } else {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text(response.error ?? 'Error al guardar')),
        );
      }
    }
  }

  @override
  void dispose() {
    fechaController.dispose();
    horasController.dispose();
    descripcionController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Actividad de Servicio Social')),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            Card(
              elevation: 4,
              margin: const EdgeInsets.symmetric(vertical: 10),
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(12),
              ),
              child: Padding(
                padding: const EdgeInsets.all(16),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: const [
                    Text(
                      'Nombre del estudiante: Juan Pérez López',
                      style: TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    SizedBox(height: 8),
                    Text('Programa: ING. DES. SOFTWARE'),
                    Text('No. Matrícula: S12345678'),
                    Text('Estatus: VIGENTE'),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 20),
            Form(
              key: _formKey,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  TextFormField(
                    controller: fechaController,
                    readOnly: true,
                    decoration: const InputDecoration(
                      labelText: 'Fecha',
                      border: OutlineInputBorder(),
                      prefixIcon: Icon(Icons.date_range),
                    ),
                    onTap: () async {
                      DateTime? pickedDate = await showDatePicker(
                        context: context,
                        initialDate: DateTime.now(),
                        firstDate: DateTime(2000),
                        lastDate: DateTime(2100),
                        locale: const Locale('es', 'ES'),
                      );
                      if (pickedDate != null) {
                        setState(() {
                          fechaController.text =
                              "${pickedDate.day.toString().padLeft(2, '0')}/${pickedDate.month.toString().padLeft(2, '0')}/${pickedDate.year}";
                        });
                      }
                    },
                    validator: (value) {
                      if (value == null || value.isEmpty) {
                        return 'Por favor selecciona una fecha';
                      }
                      return null;
                    },
                  ),
                  const SizedBox(height: 16),
                  TextFormField(
                    controller: horasController,
                    keyboardType: TextInputType.number,
                    decoration: const InputDecoration(
                      labelText: 'Horas realizadas',
                      border: OutlineInputBorder(),
                      prefixIcon: Icon(Icons.timer),
                    ),
                    validator: (value) {
                      if (value == null || value.isEmpty) {
                        return 'Por favor ingresa las horas';
                      }
                      if (int.tryParse(value) == null) {
                        return 'Ingresa un número válido';
                      }
                      return null;
                    },
                  ),
                  const SizedBox(height: 16),
                  TextFormField(
                    controller: descripcionController,
                    maxLength: 450,
                    maxLines: 5,
                    decoration: const InputDecoration(
                      labelText: 'Descripción',
                      border: OutlineInputBorder(),
                      alignLabelWithHint: true,
                    ),
                    validator: (value) {
                      if (value == null || value.isEmpty) {
                        return 'Por favor ingresa una descripción';
                      }
                      return null;
                    },
                  ),
                  const SizedBox(height: 24),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      ElevatedButton(
                        onPressed: _uploadActivities,
                        child: const Text('Guardar'),
                      ),
                      ElevatedButton(
                        onPressed: () {
                          Navigator.pushReplacement(
                            context,
                            MaterialPageRoute(
                              builder: (context) => ServicioSocialScreen(),
                            ),
                          );
                        },
                        style: ElevatedButton.styleFrom(
                          backgroundColor: Colors.grey,
                        ),
                        child: const Text('Regresar'),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
