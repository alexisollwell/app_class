import 'package:flutter/material.dart';
import 'package:cesunapp/Pages/load_page.dart'; // Mantienes solo esta pantalla

class StudentPage extends StatefulWidget {
  const StudentPage({super.key});

  @override
  State<StudentPage> createState() => _StudentPageState();
}

class _StudentPageState extends State<StudentPage> {
  final _formKey = GlobalKey<FormState>();

  // Controladores vacíos para que el usuario llene los datos
  final TextEditingController _nombreController = TextEditingController();
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _celularController = TextEditingController();
  final TextEditingController _carreraController = TextEditingController();
  final TextEditingController _grupoController = TextEditingController();
  final TextEditingController _modalidadController = TextEditingController();
  final TextEditingController _gradoController = TextEditingController();
  final TextEditingController _estatusController = TextEditingController();
  final TextEditingController _matriculaController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Perfil del Estudiante')),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(20),
        child: Form(
          key: _formKey,
          child: Column(
            children: [
              const CircleAvatar(
                radius: 60,
                backgroundImage: AssetImage('assets/images/usuario.png'),
                backgroundColor: Colors.transparent,
              ),
              const SizedBox(height: 20),

              _buildTextField('Nombre', _nombreController),
              _buildTextField('Email', _emailController, keyboardType: TextInputType.emailAddress),
              _buildTextField('Celular', _celularController, keyboardType: TextInputType.phone),
              _buildTextField('Carrera', _carreraController),
              _buildTextField('Grupo', _grupoController),
              _buildTextField('Modalidad', _modalidadController),
              _buildTextField('Grado', _gradoController),
              _buildTextField('Estatus', _estatusController),
              _buildTextField('Matrícula', _matriculaController),

              const SizedBox(height: 20),

              ElevatedButton(
                onPressed: () {
                  if (_formKey.currentState!.validate()) {
                    ScaffoldMessenger.of(context).showSnackBar(
                      const SnackBar(content: Text('Datos guardados')),
                    );
                  }
                },
                child: const Text('GUARDAR DATOS'),
              ),

              const SizedBox(height: 30),

              ElevatedButton.icon(
                icon: const Icon(Icons.sync),
                label: const Text('CARGA'),
                onPressed: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (_) => const LoadPage()),
                  );
                },
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildTextField(String label, TextEditingController controller, {TextInputType? keyboardType}) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8),
      child: TextFormField(
        controller: controller,
        keyboardType: keyboardType,
        decoration: InputDecoration(
          labelText: label,
          border: const OutlineInputBorder(),
          fillColor: Colors.white,
          filled: true,
        ),
        validator: (value) => value == null || value.isEmpty ? 'Campo requerido' : null,
      ),
    );
  }
}
