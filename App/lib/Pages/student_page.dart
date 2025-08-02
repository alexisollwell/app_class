import 'package:flutter/material.dart';

class PerfilUsuarioScreen extends StatefulWidget {
  const PerfilUsuarioScreen({super.key});

  @override
  State<PerfilUsuarioScreen> createState() => _PerfilUsuarioScreenState();
}

class _PerfilUsuarioScreenState extends State<PerfilUsuarioScreen> {
  bool isEditing = false;
  bool showAddressSection = false;
  final _formKey = GlobalKey<FormState>();
  
  // Lista de tipos sanguíneos disponibles
  final List<String> tiposSanguineos = [
    'A+', 'A-', 
    'B+', 'B-', 
    'AB+', 'AB-', 
    'O+', 'O-'
  ];
  
  // Datos principales
  final Map<String, String> _originalData = {
    'matricula': '22020080',
    'nombre': 'ALVAREZ RODRIGUEZ ESMERALDA',
    'periodo': '2022-2',
    'cuatrimestre': '10',
    'carrera': 'ING. DES. SOFTWARE',
    'claveCarrera': '10IDESVA',
    'materias': '5',
    'modalidad': 'EJECUTIVA',
    'estatus': 'VIGENTE',
    'tipoSanguineo': 'A+',
    'alergias': 'Ninguna',
    'telefono': '6631188128',
    'email': 'esmeralda@gmail.com',
  };

  // Datos de dirección
  final Map<String, String> _originalAddress = {
    'calle': '',
    'numExt': '',
    'numInt': '',
    'cp': '',
    'colonia': '',
    'pais': '',
    'estado': '',
    'municipio': '',
    'localidad': '',
  };
  
  late Map<String, String> _currentData;
  late Map<String, String> _currentAddress;

  @override
  void initState() {
    super.initState();
    _currentData = Map.from(_originalData);
    _currentAddress = Map.from(_originalAddress);
  }

  void _guardarDatos() {
    if (_formKey.currentState!.validate()) {
      // Actualizar datos originales con los cambios
      _originalData.addAll(_currentData);
      
      // Solo actualizar campos de dirección que no estén vacíos
      _currentAddress.forEach((key, value) {
        if (value.isNotEmpty) {
          _originalAddress[key] = value;
        }
      });
      
      setState(() {
        isEditing = false;
        showAddressSection = false;
      });
      
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Text("Datos guardados correctamente"),
          backgroundColor: Colors.green,
        ),
      );
    }
  }

  void _cancelarEdicion() {
    setState(() {
      isEditing = false;
      showAddressSection = false;
      // Restaurar valores originales
      _currentData = Map.from(_originalData);
      _currentAddress = Map.from(_originalAddress);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Perfil del Alumno', style: TextStyle(color: Colors.white)),
        backgroundColor: Colors.blue[800],
        iconTheme: const IconThemeData(color: Colors.white),
        actions: [
          if (!isEditing)
            IconButton(
              icon: const Icon(Icons.edit, color: Colors.white),
              onPressed: () {
                setState(() {
                  isEditing = true;
                });
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
              children: [
                // Avatar
                Container(
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    boxShadow: [
                      BoxShadow(
                        color: Colors.blue.withOpacity(0.3),
                        blurRadius: 10,
                        spreadRadius: 3,
                      )
                    ],
                  ),
                  child: const CircleAvatar(
                    radius: 60,
                    backgroundImage: AssetImage('assets/images/usuario.png'),
                    backgroundColor: Colors.transparent,
                  ),
                ),
                const SizedBox(height: 20),
                
                isEditing ? _buildEditForm() : _buildInfoDisplay(),
                
                if (isEditing) ...[
                  const SizedBox(height: 20),
                  
                  // Botón para mostrar/ocultar dirección
                  OutlinedButton.icon(
                    icon: Icon(showAddressSection ? Icons.arrow_drop_up : Icons.arrow_drop_down),
                    label: Text(showAddressSection ? 'Ocultar dirección' : 'Agregar dirección'),
                    style: OutlinedButton.styleFrom(
                      foregroundColor: Colors.blue[800],
                      side: BorderSide(color: Colors.blue[800]!),
                    ),
                    onPressed: () {
                      setState(() {
                        showAddressSection = !showAddressSection;
                      });
                    },
                  ),
                  
                  if (showAddressSection) _buildAddressForm(),
                  
                  const SizedBox(height: 20),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      ElevatedButton(
                        onPressed: _cancelarEdicion,
                        style: ElevatedButton.styleFrom(
                          backgroundColor: Colors.grey[600],
                          padding: const EdgeInsets.symmetric(horizontal: 30, vertical: 15),
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(10),
                          ),
                        ),
                        child: const Text('Cancelar', style: TextStyle(color: Colors.white)),
                      ),
                      const SizedBox(width: 20),
                      ElevatedButton(
                        onPressed: _guardarDatos,
                        style: ElevatedButton.styleFrom(
                          backgroundColor: Colors.blue[800],
                          padding: const EdgeInsets.symmetric(horizontal: 30, vertical: 15),
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(10),
                          ),
                        ),
                        child: const Text('Guardar', style: TextStyle(color: Colors.white)),
                      ),
                    ],
                  ),
                ],
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildInfoDisplay() {
    final hasAddressData = _currentAddress.entries.any((entry) => entry.value.isNotEmpty);
    
    return Column(
      children: [
        // Tarjeta de información académica
        Container(
          width: double.infinity,
          padding: const EdgeInsets.all(20),
          decoration: BoxDecoration(
            color: Colors.blue[50],
            borderRadius: BorderRadius.circular(15),
            border: Border.all(color: Colors.blue[100]!),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const Text('INFORMACIÓN ACADÉMICA', 
                style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: Colors.blue)),
              const SizedBox(height: 15),
              _buildInfoRow(Icons.badge, 'Matrícula', _currentData['matricula']!),
              _buildInfoRow(Icons.person, 'Nombre', _currentData['nombre']!),
              _buildInfoRow(Icons.school, 'Carrera', '${_currentData['carrera']} (${_currentData['claveCarrera']})'),
              _buildInfoRow(Icons.calendar_today, 'Periodo', '${_currentData['periodo']} - Cuatrimestre ${_currentData['cuatrimestre']}'),
              _buildInfoRow(Icons.library_books, 'Materias', '${_currentData['materias']} (${_currentData['modalidad']})'),
              _buildInfoRow(Icons.verified, 'Estatus', _currentData['estatus']!,
                isStatus: _currentData['estatus'] == 'VIGENTE'),
            ],
          ),
        ),
        
        const SizedBox(height: 20),
        
        // Tarjeta de datos personales
        Container(
          width: double.infinity,
          padding: const EdgeInsets.all(20),
          decoration: BoxDecoration(
            color: Colors.blue[50],
            borderRadius: BorderRadius.circular(15),
            border: Border.all(color: Colors.blue[100]!),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const Text('DATOS PERSONALES', 
                style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: Colors.blue)),
              const SizedBox(height: 15),
              _buildInfoRow(Icons.phone, 'Teléfono', _currentData['telefono']!),
              _buildInfoRow(Icons.email, 'Email', _currentData['email']!),
              _buildInfoRow(Icons.bloodtype, 'Tipo Sanguíneo', _currentData['tipoSanguineo']!),
              _buildInfoRow(Icons.medical_services, 'Alergias', _currentData['alergias']!),
            ],
          ),
        ),
        
        // Mostrar dirección solo si hay datos
        if (hasAddressData) ...[
          const SizedBox(height: 20),
          Container(
            width: double.infinity,
            padding: const EdgeInsets.all(20),
            decoration: BoxDecoration(
              color: Colors.blue[50],
              borderRadius: BorderRadius.circular(15),
              border: Border.all(color: Colors.blue[100]!),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text('DIRECCIÓN', 
                  style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: Colors.blue)),
                const SizedBox(height: 15),
                if (_currentAddress['calle']!.isNotEmpty) 
                  _buildInfoRow(Icons.home, 'Calle', '${_currentAddress['calle']} ${_currentAddress['numExt']} ${_currentAddress['numInt']!.isNotEmpty ? 'Int. ${_currentAddress['numInt']}' : ''}'),
                if (_currentAddress['colonia']!.isNotEmpty) 
                  _buildInfoRow(Icons.location_city, 'Colonia', _currentAddress['colonia']!),
                if (_currentAddress['cp']!.isNotEmpty) 
                  _buildInfoRow(Icons.markunread_mailbox, 'Código Postal', _currentAddress['cp']!),
                if (_currentAddress['municipio']!.isNotEmpty) 
                  _buildInfoRow(Icons.location_on, 'Municipio', _currentAddress['municipio']!),
                if (_currentAddress['estado']!.isNotEmpty) 
                  _buildInfoRow(Icons.map, 'Estado', _currentAddress['estado']!),
                if (_currentAddress['pais']!.isNotEmpty) 
                  _buildInfoRow(Icons.public, 'País', _currentAddress['pais']!),
              ],
            ),
          ),
        ],
      ],
    );
  }

  Widget _buildEditForm() {
    return Column(
      children: [
        // Información académica
        Container(
          width: double.infinity,
          padding: const EdgeInsets.all(15),
          decoration: BoxDecoration(
            color: Colors.blue[50],
            borderRadius: BorderRadius.circular(15),
            border: Border.all(color: Colors.blue[100]!),
          ),
          child: Column(
            children: [
              const Text('INFORMACIÓN ACADÉMICA', 
                style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: Colors.blue)),
              const SizedBox(height: 15),
              TextFormField(
                initialValue: _currentData['matricula'],
                decoration: _inputDecoration('Matrícula*', Icons.badge),
                validator: (value) => value!.isEmpty ? 'Este campo es obligatorio' : null,
                onChanged: (value) => _currentData['matricula'] = value,
              ),
              const SizedBox(height: 15),
              TextFormField(
                initialValue: _currentData['nombre'],
                decoration: _inputDecoration('Nombre Completo*', Icons.person),
                validator: (value) => value!.isEmpty ? 'Este campo es obligatorio' : null,
                onChanged: (value) => _currentData['nombre'] = value,
              ),
              const SizedBox(height: 15),
              TextFormField(
                initialValue: _currentData['carrera'],
                decoration: _inputDecoration('Carrera*', Icons.school),
                validator: (value) => value!.isEmpty ? 'Este campo es obligatorio' : null,
                onChanged: (value) => _currentData['carrera'] = value,
              ),
              const SizedBox(height: 15),
              TextFormField(
                initialValue: _currentData['claveCarrera'],
                decoration: _inputDecoration('Clave de Carrera*', Icons.code),
                validator: (value) => value!.isEmpty ? 'Este campo es obligatorio' : null,
                onChanged: (value) => _currentData['claveCarrera'] = value,
              ),
              const SizedBox(height: 15),
              Row(
                children: [
                  Expanded(
                    child: TextFormField(
                      initialValue: _currentData['periodo'],
                      decoration: _inputDecoration('Periodo*', Icons.calendar_today),
                      validator: (value) => value!.isEmpty ? 'Este campo es obligatorio' : null,
                      onChanged: (value) => _currentData['periodo'] = value,
                    ),
                  ),
                  const SizedBox(width: 10),
                  Expanded(
                    child: TextFormField(
                      initialValue: _currentData['cuatrimestre'],
                      decoration: _inputDecoration('Cuatrimestre*', Icons.format_list_numbered),
                      validator: (value) => value!.isEmpty ? 'Este campo es obligatorio' : null,
                      keyboardType: TextInputType.number,
                      onChanged: (value) => _currentData['cuatrimestre'] = value,
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 15),
              Row(
                children: [
                  Expanded(
                    child: TextFormField(
                      initialValue: _currentData['materias'],
                      decoration: _inputDecoration('Materias*', Icons.library_books),
                      validator: (value) => value!.isEmpty ? 'Este campo es obligatorio' : null,
                      keyboardType: TextInputType.number,
                      onChanged: (value) => _currentData['materias'] = value,
                    ),
                  ),
                  const SizedBox(width: 10),
                  Expanded(
                    child: TextFormField(
                      initialValue: _currentData['modalidad'],
                      decoration: _inputDecoration('Modalidad*', Icons.school),
                      validator: (value) => value!.isEmpty ? 'Este campo es obligatorio' : null,
                      onChanged: (value) => _currentData['modalidad'] = value,
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
        
        const SizedBox(height: 20),
        
        // Datos personales
        Container(
          width: double.infinity,
          padding: const EdgeInsets.all(15),
          decoration: BoxDecoration(
            color: Colors.blue[50],
            borderRadius: BorderRadius.circular(15),
            border: Border.all(color: Colors.blue[100]!),
          ),
          child: Column(
            children: [
              const Text('DATOS PERSONALES', 
                style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: Colors.blue)),
              const SizedBox(height: 15),
              TextFormField(
                initialValue: _currentData['telefono'],
                decoration: _inputDecoration('Teléfono*', Icons.phone),
                validator: (value) {
                  if (value!.isEmpty) return 'Este campo es obligatorio';
                  if (!RegExp(r'^[0-9]{10}$').hasMatch(value)) return '10 dígitos requeridos';
                  return null;
                },
                keyboardType: TextInputType.phone,
                onChanged: (value) => _currentData['telefono'] = value,
              ),
              const SizedBox(height: 15),
              TextFormField(
                initialValue: _currentData['email'],
                decoration: _inputDecoration('Email*', Icons.email),
                validator: (value) {
                  if (value!.isEmpty) return 'Este campo es obligatorio';
                  if (!RegExp(r'^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$').hasMatch(value)) {
                    return 'Correo inválido';
                  }
                  return null;
                },
                keyboardType: TextInputType.emailAddress,
                onChanged: (value) => _currentData['email'] = value,
              ),
              const SizedBox(height: 15),
              DropdownButtonFormField<String>(
                value: _currentData['tipoSanguineo'],
                decoration: _inputDecoration('Tipo Sanguíneo*', Icons.bloodtype),
                items: tiposSanguineos.map((String value) {
                  return DropdownMenuItem<String>(
                    value: value,
                    child: Text(value),
                  );
                }).toList(),
                validator: (value) => value == null ? 'Este campo es obligatorio' : null,
                onChanged: (value) {
                  setState(() {
                    _currentData['tipoSanguineo'] = value!;
                  });
                },
              ),
              const SizedBox(height: 15),
              TextFormField(
                initialValue: _currentData['alergias'],
                decoration: _inputDecoration('Alergias', Icons.medical_services),
                maxLines: 2,
                onChanged: (value) => _currentData['alergias'] = value,
              ),
            ],
          ),
        ),
      ],
    );
  }

  Widget _buildAddressForm() {
    return Container(
      width: double.infinity,
      margin: const EdgeInsets.only(top: 20),
      padding: const EdgeInsets.all(15),
      decoration: BoxDecoration(
        color: Colors.blue[50],
        borderRadius: BorderRadius.circular(15),
        border: Border.all(color: Colors.blue[100]!),
      ),
      child: Column(
        children: [
          const Text('DATOS DE DIRECCIÓN', 
            style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: Colors.blue)),
          const SizedBox(height: 15),
          TextFormField(
            initialValue: _currentAddress['calle'],
            decoration: _inputDecoration('Calle', Icons.home),
            onChanged: (value) => _currentAddress['calle'] = value,
          ),
          const SizedBox(height: 15),
          Row(
            children: [
              Expanded(
                child: TextFormField(
                  initialValue: _currentAddress['numExt'],
                  decoration: _inputDecoration('Número Exterior', Icons.format_list_numbered),
                  onChanged: (value) => _currentAddress['numExt'] = value,
                ),
              ),
              const SizedBox(width: 10),
              Expanded(
                child: TextFormField(
                  initialValue: _currentAddress['numInt'],
                  decoration: _inputDecoration('Número Interior', Icons.format_list_numbered),
                  onChanged: (value) => _currentAddress['numInt'] = value,
                ),
              ),
            ],
          ),
          const SizedBox(height: 15),
          TextFormField(
            initialValue: _currentAddress['colonia'],
            decoration: _inputDecoration('Colonia', Icons.location_city),
            onChanged: (value) => _currentAddress['colonia'] = value,
          ),
          const SizedBox(height: 15),
          Row(
            children: [
              Expanded(
                child: TextFormField(
                  initialValue: _currentAddress['cp'],
                  decoration: _inputDecoration('Código Postal', Icons.markunread_mailbox),
                  keyboardType: TextInputType.number,
                  onChanged: (value) => _currentAddress['cp'] = value,
                ),
              ),
              const SizedBox(width: 10),
              Expanded(
                child: TextFormField(
                  initialValue: _currentAddress['municipio'],
                  decoration: _inputDecoration('Municipio', Icons.location_on),
                  onChanged: (value) => _currentAddress['municipio'] = value,
                ),
              ),
            ],
          ),
          const SizedBox(height: 15),
          TextFormField(
            initialValue: _currentAddress['estado'],
            decoration: _inputDecoration('Estado', Icons.map),
            onChanged: (value) => _currentAddress['estado'] = value,
          ),
          const SizedBox(height: 15),
          TextFormField(
            initialValue: _currentAddress['pais'],
            decoration: _inputDecoration('País', Icons.public),
            onChanged: (value) => _currentAddress['pais'] = value,
          ),
        ],
      ),
    );
  }

  Widget _buildInfoRow(IconData icon, String label, String value, {bool isStatus = false}) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Icon(icon, size: 20, color: Colors.blue[800]),
          const SizedBox(width: 10),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(label, style: TextStyle(
                  fontSize: 12,
                  color: Colors.blue[800],
                )),
                const SizedBox(height: 2),
                Text(value, style: TextStyle(
                  fontSize: 14,
                  fontWeight: FontWeight.w500,
                  color: isStatus 
                      ? Colors.green
                      : Colors.black,
                )),
              ],
            ),
          ),
        ],
      ),
    );
  }

  InputDecoration _inputDecoration(String label, IconData icon) {
    return InputDecoration(
      labelText: label,
      prefixIcon: Icon(icon, size: 20, color: Colors.blue[800]),
      border: OutlineInputBorder(
        borderRadius: BorderRadius.circular(10),
        borderSide: BorderSide(color: Colors.blue[800]!),
      ),
      enabledBorder: OutlineInputBorder(
        borderRadius: BorderRadius.circular(10),
        borderSide: BorderSide(color: Colors.blue[800]!),
      ),
      focusedBorder: OutlineInputBorder(
        borderRadius: BorderRadius.circular(10),
        borderSide: const BorderSide(color: Colors.blue, width: 2),
      ),
      contentPadding: const EdgeInsets.symmetric(vertical: 15, horizontal: 15),
    );
  }
}