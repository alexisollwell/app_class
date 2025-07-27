import 'package:flutter/material.dart';

class PerfilUsuarioScreen extends StatefulWidget {
  const PerfilUsuarioScreen({super.key});

  @override
  State<PerfilUsuarioScreen> createState() => _PerfilUsuarioScreenState();
}

class _PerfilUsuarioScreenState extends State<PerfilUsuarioScreen> {
  bool isEditing = false;
  final _formKey = GlobalKey<FormState>();
  
  // Datos del usuario
  String matricula = '22020080';
  String nombre = 'ALVAREZ RODRIGUEZ ESMERALDA';
  String periodo = '2022-2';
  String cuatrimestre = '10';
  String carrera = 'ING. DES. SOFTWARE';
  String claveCarrera = '10IDESVA';
  String materias = '5';
  String modalidad = 'EJECUTIVA';
  String estatus = 'VIGENTE';
  String tipoSanguineo = 'A+';
  String rh = 'Positivo';
  String alergias = 'Ninguna';
  String telefono = '5512345678';
  String email = 'esmeralda@example.com';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Información del Alumno'),
        actions: [
          IconButton(
            icon: Icon(isEditing ? Icons.save : Icons.edit),
            onPressed: () {
              if (isEditing) {
                if (_formKey.currentState!.validate()) {
                  setState(() {
                    isEditing = false;
                  });
                  ScaffoldMessenger.of(context).showSnackBar(
                    const SnackBar(
                      content: Text("Datos guardados correctamente"),
                      backgroundColor: Colors.green,
                    ),
                  );
                }
              } else {
                setState(() {
                  isEditing = true;
                });
              }
            },
          ),
        ],
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(20),
        child: Center(
          child: Form(
            key: _formKey,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                const CircleAvatar(
                  radius: 60,
                  backgroundImage: AssetImage('assets/images/usuario.png'),
                  backgroundColor: Colors.transparent,
                ),
                const SizedBox(height: 20),
                
                // Mostrar información o campos de edición
                isEditing 
                    ? _buildEditForm()
                    : _buildInfoDisplay(),
                
                const SizedBox(height: 30),
                
                // Solo mostrar botón de guardar si está en modo edición
                if (isEditing)
                  ElevatedButton(
                    onPressed: () {
                      if (_formKey.currentState!.validate()) {
                        setState(() {
                          isEditing = false;
                        });
                        ScaffoldMessenger.of(context).showSnackBar(
                          const SnackBar(
                            content: Text("Datos guardados correctamente"),
                            backgroundColor: Colors.green,
                          ),
                        );
                      }
                    },
                    style: ElevatedButton.styleFrom(
                      padding: const EdgeInsets.symmetric(horizontal: 40, vertical: 15),
                    ),
                    child: const Text('Guardar Cambios'),
                  ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildInfoDisplay() {
    return Column(
      children: [
        Text(matricula, style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
        const SizedBox(height: 10),
        Text(nombre, style: const TextStyle(fontSize: 16)),
        const SizedBox(height: 10),
        Text('$periodo / CUATRIMESTRE $cuatrimestre'),
        const SizedBox(height: 10),
        Text('$carrera ($claveCarrera)'),
        const SizedBox(height: 10),
        Text('No. Materias: $materias - $modalidad'),
        const SizedBox(height: 10),
        Text('Estatus: $estatus'),
        const SizedBox(height: 20),
        const Divider(),
        const SizedBox(height: 10),
        const Text('Datos de Contacto', style: TextStyle(fontWeight: FontWeight.bold)),
        const SizedBox(height: 10),
        Text('Teléfono: $telefono'),
        const SizedBox(height: 5),
        Text('Email: $email'),
        const SizedBox(height: 20),
        const Divider(),
        const SizedBox(height: 10),
        const Text('Datos Médicos', style: TextStyle(fontWeight: FontWeight.bold)),
        const SizedBox(height: 10),
        Text('Tipo Sanguíneo: $tipoSanguineo'),
        const SizedBox(height: 5),
        Text('RH: $rh'),
        const SizedBox(height: 5),
        Text('Alergias: $alergias'),
      ],
    );
  }

  Widget _buildEditForm() {
    return Column(
      children: [
        // Datos escolares
        TextFormField(
          initialValue: matricula,
          decoration: const InputDecoration(labelText: 'Matrícula*'),
          readOnly: true, // Matrícula no se puede editar
          style: TextStyle(color: Colors.grey[600]),
        ),
        const SizedBox(height: 10),
        TextFormField(
          initialValue: nombre,
          decoration: const InputDecoration(labelText: 'Nombre Completo*'),
          validator: (value) => value!.isEmpty ? 'Campo obligatorio' : null,
          onChanged: (value) => nombre = value,
        ),
        const SizedBox(height: 10),
        Row(
          children: [
            Expanded(
              child: TextFormField(
                initialValue: periodo,
                decoration: const InputDecoration(labelText: 'Periodo*'),
                validator: (value) => value!.isEmpty ? 'Campo obligatorio' : null,
                onChanged: (value) => periodo = value,
              ),
            ),
            const SizedBox(width: 10),
            Expanded(
              child: TextFormField(
                initialValue: cuatrimestre,
                decoration: const InputDecoration(labelText: 'Cuatrimestre*'),
                validator: (value) => value!.isEmpty ? 'Campo obligatorio' : null,
                keyboardType: TextInputType.number,
                onChanged: (value) => cuatrimestre = value,
              ),
            ),
          ],
        ),
        const SizedBox(height: 10),
        
        // Datos de contacto
        TextFormField(
          initialValue: telefono,
          decoration: const InputDecoration(labelText: 'Teléfono*'),
          validator: (value) {
            if (value!.isEmpty) return 'Campo obligatorio';
            if (!RegExp(r'^[0-9]{10}$').hasMatch(value)) return '10 dígitos requeridos';
            return null;
          },
          keyboardType: TextInputType.phone,
          onChanged: (value) => telefono = value,
        ),
        const SizedBox(height: 10),
        TextFormField(
          initialValue: email,
          decoration: const InputDecoration(labelText: 'Email*'),
          validator: (value) {
            if (value!.isEmpty) return 'Campo obligatorio';
            if (!RegExp(r'^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$').hasMatch(value)) {
              return 'Correo inválido';
            }
            return null;
          },
          keyboardType: TextInputType.emailAddress,
          onChanged: (value) => email = value,
        ),
        const SizedBox(height: 10),
        
        // Datos médicos
        Row(
          children: [
            Expanded(
              child: TextFormField(
                initialValue: tipoSanguineo,
                decoration: const InputDecoration(labelText: 'Tipo Sanguíneo*'),
                validator: (value) {
                  if (value!.isEmpty) return 'Campo obligatorio';
                  if (!RegExp(r'^(A|B|AB|O)[+-]$').hasMatch(value)) {
                    return 'Ejemplo: A+ o B-';
                  }
                  return null;
                },
                onChanged: (value) => tipoSanguineo = value,
              ),
            ),
            const SizedBox(width: 10),
            Expanded(
              child: TextFormField(
                initialValue: rh,
                decoration: const InputDecoration(labelText: 'RH*'),
                validator: (value) {
                  if (value!.isEmpty) return 'Campo obligatorio';
                  if (!['positivo', 'negativo'].contains(value.toLowerCase())) {
                    return 'Ingrese positivo/negativo';
                  }
                  return null;
                },
                onChanged: (value) => rh = value,
              ),
            ),
          ],
        ),
        const SizedBox(height: 10),
        TextFormField(
          initialValue: alergias,
          decoration: const InputDecoration(labelText: 'Alergias'),
          maxLines: 2,
          onChanged: (value) => alergias = value,
        ),
      ],
    );
  }
}