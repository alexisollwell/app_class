import 'package:flutter/material.dart';

class StudentPage extends StatefulWidget {
  const StudentPage({super.key});

  @override
  State<StudentPage> createState() => _StudentPageState();
}

class _StudentPageState extends State<StudentPage>
    with SingleTickerProviderStateMixin {
  late TabController _tabController;
  final _formKey = GlobalKey<FormState>();

  // Controladores para Datos Generales
  final matriculaController = TextEditingController();
  final nombreController = TextEditingController();
  final fechaNacimientoController = TextEditingController();
  final generoController = TextEditingController();
  final emailController = TextEditingController();
  final curpController = TextEditingController();
  final apellidoPController = TextEditingController();
  final apellidoMController = TextEditingController();
  final paisNacimientoController = TextEditingController();
  final estadoNacimientoController = TextEditingController();
  final estadoCivilController = TextEditingController();
  final telefonoController = TextEditingController();

  // Controladores para Datos Escolares
  final campusController = TextEditingController();
  final programaController = TextEditingController();
  final modalidadController = TextEditingController();
  final submodalidadController = TextEditingController();
  final planEstudiosController = TextEditingController();
  final grupoController = TextEditingController();
  final periodoController = TextEditingController();

  // Controladores para Dirección
  final calleController = TextEditingController();
  final numExtController = TextEditingController();
  final cpController = TextEditingController();
  final paisController = TextEditingController();
  final estadoController = TextEditingController();
  final municipioController = TextEditingController();
  final localidadController = TextEditingController();

  // Controladores para Referencias Personales
  final ref1NombreController = TextEditingController();
  final ref1ApellidoPController = TextEditingController();
  final ref1ApellidoMController = TextEditingController();
  final ref1ParentescoController = TextEditingController();
  final ref1TelefonoController = TextEditingController();
  final ref1EmailController = TextEditingController();

  final ref2NombreController = TextEditingController();
  final ref2ApellidoPController = TextEditingController();
  final ref2ParentescoController = TextEditingController();
  final ref2TelefonoController = TextEditingController();

  final ref3NombreController = TextEditingController();
  final ref3ApellidoPController = TextEditingController();
  final ref3ApellidoMController = TextEditingController();
  final ref3ParentescoController = TextEditingController();

  // Controladores para Datos Laborales
  final trabajaController = TextEditingController();
  final tipoEmpresaController = TextEditingController();
  final anioInicioController = TextEditingController();
  final anioFinController = TextEditingController();
  final horarioLaboralController = TextEditingController();
  final puestoController = TextEditingController();
  final horasSemanalesController = TextEditingController();
  final relacionCarreraController = TextEditingController();

  // Controladores para Datos Médicos
  final tipoSanguineoController = TextEditingController();
  final rhController = TextEditingController();
  final alergiasController = TextEditingController();
  final seguroController = TextEditingController();
  final intervencionesController = TextEditingController();
  final indicacionesController = TextEditingController();
  final pesoController = TextEditingController();
  final estaturaController = TextEditingController();

  @override
  void initState() {
    super.initState();
    _tabController = TabController(length: 6, vsync: this);
  }

  @override
  void dispose() {
    _tabController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Información del Alumno'),
        bottom: TabBar(
          controller: _tabController,
          isScrollable: true,
          tabs: const [
            Tab(text: 'Datos Generales'),
            Tab(text: 'Datos Escolares'),
            Tab(text: 'Dirección'),
            Tab(text: 'Referencias'),
            Tab(text: 'Datos Laborales'),
            Tab(text: 'Datos Médicos'),
          ],
        ),
      ),
      body: Form(
        key: _formKey,
        child: Column(
          children: [
            _buildHeaderCard(),
            Expanded(
              child: TabBarView(
                controller: _tabController,
                children: [
                  _buildDatosGenerales(),
                  _buildDatosEscolares(),
                  _buildDireccion(),
                  _buildReferenciasPersonales(),
                  _buildDatosLaborales(),
                  _buildDatosMedicos(),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildHeaderCard() {
    return Card(
      margin: const EdgeInsets.all(12),
      elevation: 3,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            const CircleAvatar(
              radius: 60,
              backgroundImage: AssetImage('assets/images/usuario.png'),
              backgroundColor: Colors.transparent,
            ),
            const SizedBox(height: 20),
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: const [
                Text("22020080",
                    style: TextStyle(fontWeight: FontWeight.bold, fontSize: 18)),
                SizedBox(height: 4),
                Text("ALVAREZ RODRIGUEZ ESMERALDA"),
                SizedBox(height: 4),
                Text("2022-2 / CUATRIMESTRE 10"),
                SizedBox(height: 4),
                Text("ING. DES. SOFTWARE (10IDESVA)"),
                SizedBox(height: 4),
                Text("No. Materias: 5 - EJECUTIVA"),
                SizedBox(height: 4),
                Text("Estatus: VIGENTE"),
              ],
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildDatosGenerales() {
    return SingleChildScrollView(
      padding: const EdgeInsets.all(16),
      child: Column(
        children: [
          _buildValidatedInput("Matrícula*", matriculaController,
              isRequired: true, isAlphanumeric: true),
          _buildValidatedInput("Nombre*", nombreController,
              isRequired: true, isName: true),
          _buildValidatedInput("Apellido Paterno*", apellidoPController,
              isRequired: true, isName: true),
          _buildValidatedInput("Apellido Materno", apellidoMController,
              isName: true),
          _buildValidatedInput("Fecha Nacimiento*", fechaNacimientoController,
              isRequired: true, isDate: true),
          _buildValidatedInput("Género*", generoController,
              isRequired: true, isGender: true),
          _buildValidatedInput("Correo*", emailController,
              isRequired: true, isEmail: true),
          _buildValidatedInput("CURP*", curpController,
              isRequired: true, isCURP: true),
          _buildValidatedInput("Teléfono*", telefonoController,
              isRequired: true, isPhone: true),
          _buildSaveButton(),
        ],
      ),
    );
  }

  Widget _buildDatosEscolares() {
    return SingleChildScrollView(
      padding: const EdgeInsets.all(16),
      child: Column(
        children: [
          _buildValidatedInput("Campus*", campusController, isRequired: true),
          _buildValidatedInput("Programa*", programaController, isRequired: true),
          _buildValidatedInput("Modalidad*", modalidadController, isRequired: true),
          _buildValidatedInput("Plan Estudios*", planEstudiosController,
              isRequired: true, isAlphanumeric: true),
          _buildValidatedInput("Grupo*", grupoController,
              isRequired: true, isAlphanumeric: true),
          _buildSaveButton(),
        ],
      ),
    );
  }

  Widget _buildDireccion() {
    return SingleChildScrollView(
      padding: const EdgeInsets.all(16),
      child: Column(
        children: [
          Row(
            children: [
              Expanded(child: _buildValidatedInput("Calle*", calleController,
                  isRequired: true)),
              const SizedBox(width: 10),
              Expanded(child: _buildValidatedInput("Núm Ext*", numExtController,
                  isRequired: true, isNumber: true)),
            ],
          ),
          _buildValidatedInput("Código Postal*", cpController,
              isRequired: true, isPostalCode: true),
          _buildValidatedInput("Municipio*", municipioController,
              isRequired: true, isName: true),
          _buildValidatedInput("Estado*", estadoController,
              isRequired: true, isName: true),
          _buildSaveButton(),
        ],
      ),
    );
  }

  Widget _buildReferenciasPersonales() {
    return SingleChildScrollView(
      padding: const EdgeInsets.all(16),
      child: Column(
        children: [
          _buildValidatedInput("Nombre Referencia 1*", ref1NombreController,
              isRequired: true, isName: true),
          _buildValidatedInput("Teléfono*", ref1TelefonoController,
              isRequired: true, isPhone: true),
          
          const Divider(),
          
          _buildValidatedInput("Nombre Referencia 2", ref2NombreController,
              isName: true),
          _buildValidatedInput("Teléfono", ref2TelefonoController,
              isPhone: true),
          _buildSaveButton(),
        ],
      ),
    );
  }

  Widget _buildDatosLaborales() {
    return SingleChildScrollView(
      padding: const EdgeInsets.all(16),
      child: Column(
        children: [
          _buildValidatedInput("Empresa*", trabajaController, 
              isRequired: true, maxLength: 50),
          _buildValidatedInput("Tipo de Empresa*", tipoEmpresaController, 
              isRequired: true, isName: true),
          Row(
            children: [
              Expanded(
                child: _buildValidatedInput("Año Inicio*", anioInicioController, 
                    isRequired: true, isYear: true)
              ),
              const SizedBox(width: 10),
              Expanded(
                child: _buildValidatedInput("Año Fin", anioFinController, 
                    isYear: true)
              ),
            ],
          ),
          _buildValidatedInput("Horario Laboral*", horarioLaboralController, 
              isRequired: true),
          _buildValidatedInput("Puesto*", puestoController, 
              isRequired: true, maxLength: 40),
          _buildValidatedInput("Horas Semanales*", horasSemanalesController, 
              isRequired: true, isNumber: true),
          _buildValidatedInput("¿Relación con carrera?*", relacionCarreraController, 
              isRequired: true, isBool: true),
          _buildSaveButton(),
        ],
      ),
    );
  }

  Widget _buildDatosMedicos() {
    return SingleChildScrollView(
      padding: const EdgeInsets.all(16),
      child: Column(
        children: [
          _buildValidatedInput("Tipo Sanguíneo*", tipoSanguineoController, 
              isRequired: true, isBloodType: true),
          _buildValidatedInput("RH*", rhController, 
              isRequired: true, isRH: true),
          _buildValidatedInput("Alergias*", alergiasController, 
              isRequired: true, maxLength: 100),
          _buildValidatedInput("Seguro Médico*", seguroController, 
              isRequired: true, maxLength: 50),
          _buildValidatedInput("Intervenciones Quirúrgicas", intervencionesController, 
              maxLength: 200),
          _buildValidatedInput("Indicaciones Emergencia*", indicacionesController, 
              isRequired: true, maxLength: 200),
          Row(
            children: [
              Expanded(
                child: _buildValidatedInput("Peso (kg)*", pesoController, 
                    isRequired: true, isNumber: true, maxLength: 3)
              ),
              const SizedBox(width: 10),
              Expanded(
                child: _buildValidatedInput("Estatura (cm)*", estaturaController, 
                    isRequired: true, isNumber: true, maxLength: 3)
              ),
            ],
          ),
          _buildSaveButton(),
        ],
      ),
    );
  }

  Widget _buildValidatedInput(String label, TextEditingController controller, {
    bool isRequired = false,
    bool isEmail = false,
    bool isPhone = false,
    bool isDate = false,
    bool isCURP = false,
    bool isNumber = false,
    bool isName = false,
    bool isAlphanumeric = false,
    bool isGender = false,
    bool isBloodType = false,
    bool isRH = false,
    bool isYear = false,
    bool isBool = false,
    bool isPostalCode = false,
    int? maxLength,
  }) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8),
      child: TextFormField(
        controller: controller,
        maxLength: maxLength,
        decoration: InputDecoration(
          labelText: label,
          border: const OutlineInputBorder(),
        ),
        validator: (value) {
          if (isRequired && (value == null || value.isEmpty)) {
            return 'Campo obligatorio';
          }
          if (value == null || value.isEmpty) return null;

          if (isEmail && !RegExp(r'^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$').hasMatch(value)) {
            return 'Correo inválido';
          }
          if (isPhone && !RegExp(r'^[0-9]{10}$').hasMatch(value)) {
            return '10 dígitos requeridos';
          }
          if (isDate && !RegExp(r'^\d{2}/\d{2}/\d{4}$').hasMatch(value)) {
            return 'Formato DD/MM/AAAA';
          }
          if (isCURP && !RegExp(r'^[A-Z]{4}\d{6}[A-Z]{6}[A-Z0-9]{2}$').hasMatch(value)) {
            return 'CURP inválida';
          }
          if (isNumber && !RegExp(r'^[0-9]+$').hasMatch(value)) {
            return 'Solo números';
          }
          if (isName && !RegExp(r'^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$').hasMatch(value)) {
            return 'Solo letras';
          }
          if (isAlphanumeric && !RegExp(r'^[a-zA-Z0-9]+$').hasMatch(value)) {
            return 'Solo alfanumérico';
          }
          if (isGender && !['masculino', 'femenino'].contains(value.toLowerCase())) {
            return 'Ingrese masculino/femenino';
          }
          if (isBloodType && !RegExp(r'^(A|B|AB|O)[+-]$').hasMatch(value.toUpperCase())) {
            return 'Ejemplo: A+ o B-';
          }
          if (isRH && !['positivo', 'negativo'].contains(value.toLowerCase())) {
            return 'Ingrese positivo/negativo';
          }
          if (isYear && !RegExp(r'^(19|20)\d{2}$').hasMatch(value)) {
            return 'Año inválido (ej: 2023)';
          }
          if (isBool && !['si', 'no'].contains(value.toLowerCase())) {
            return 'Responda con "si" o "no"';
          }
          if (isPostalCode && !RegExp(r'^[0-9]{5}$').hasMatch(value)) {
            return '5 dígitos requeridos';
          }
          return null;
        },
      ),
    );
  }

  Widget _buildSaveButton() {
    return ElevatedButton(
      onPressed: () {
        if (_formKey.currentState!.validate()) {
          ScaffoldMessenger.of(context).showSnackBar(
            const SnackBar(
              content: Text("Datos guardados correctamente"),
              backgroundColor: Colors.green,
            ),
          );
        } else {
          ScaffoldMessenger.of(context).showSnackBar(
            const SnackBar(
              content: Text("Complete los campos requeridos"),
              backgroundColor: Colors.red,
            ),
          );
        }
      },
      style: ElevatedButton.styleFrom(
        backgroundColor: Colors.blue,
        padding: const EdgeInsets.symmetric(horizontal: 30, vertical: 15),
      ),
      child: const Text(
        "Guardar",
        style: TextStyle(fontSize: 16, color: Colors.white),
      ),
    );
  }
}