import 'package:flutter/material.dart';

// Definición de la clase Transaction
// Adapta esta clase para que coincida con la estructura de tus datos reales.
class Transaction {
  final String id; // Clave
  final String subjectName; // Nombre de Asignatura
  final String planGrade; // Grado (Plan)
  final String period; // Periodo (Año-Cuatrimestre)
  final int credits; // Créditos
  final String course; // Curso
  final String currentGrade; // Grado (Cursado)
  final String qualification; // Calificación
  final String type; // Tipo (Ejemplo: Ordinaria, Extraordinaria)
  final String es; // Campo "Es..." (si aplica, o puedes renombrarlo)

  Transaction({
    required this.id,
    required this.subjectName,
    required this.planGrade,
    required this.period,
    required this.credits,
    required this.course,
    required this.currentGrade,
    required this.qualification,
    required this.type,
    required this.es,
  });
}

// Clase KardexScreen con la lógica de UI y filtros
class KardexScreen extends StatefulWidget {
  const KardexScreen({super.key});

  @override
  State<KardexScreen> createState() => _KardexScreenState();
}

class _KardexScreenState extends State<KardexScreen> {
  // Datos de ejemplo para el Kardex
  // !!! IMPORTANTE: Reemplaza estos datos con los tuyos reales.
  final List<Transaction> _allTransactions = [
    Transaction(id: 'ING001', subjectName: 'Matemáticas I', planGrade: '1er Semestre', period: '2024-1', credits: 6, course: 'Regular', currentGrade: '1er Semestre', qualification: '9.0', type: 'Ordinaria', es: ''),
    Transaction(id: 'FIS002', subjectName: 'Física General', planGrade: '1er Semestre', period: '2024-1', credits: 6, course: 'Regular', currentGrade: '1er Semestre', qualification: '8.5', type: 'Ordinaria', es: ''),
    Transaction(id: 'PRG003', subjectName: 'Programación Básica', planGrade: '2do Semestre', period: '2024-2', credits: 7, course: 'Regular', currentGrade: '2do Semestre', qualification: '9.5', type: 'Ordinaria', es: ''),
    Transaction(id: 'CAL004', subjectName: 'Cálculo Diferencial', planGrade: '2do Semestre', period: '2024-2', credits: 6, course: 'Regular', currentGrade: '2do Semestre', qualification: '7.8', type: 'Ordinaria', es: ''),
    Transaction(id: 'ALG005', subjectName: 'Álgebra Lineal', planGrade: '3er Cuatrimestre', period: '2025-1', credits: 6, course: 'Regular', currentGrade: '3er Cuatrimestre', qualification: '9.2', type: 'Ordinaria', es: ''),
    Transaction(id: 'RED006', subjectName: 'Redes de Computadoras', planGrade: '3er Cuatrimestre', period: '2025-1', credits: 5, course: 'Regular', currentGrade: '3er Cuatrimestre', qualification: '8.0', type: 'Ordinaria', es: ''),
    Transaction(id: 'DBA007', subjectName: 'Bases de Datos', planGrade: '4to Cuatrimestre', period: '2025-2', credits: 7, course: 'Regular', currentGrade: '4to Cuatrimestre', qualification: '8.9', type: 'Ordinaria', es: ''),
    Transaction(id: 'SOF008', subjectName: 'Ingeniería de Software', planGrade: '4to Cuatrimestre', period: '2025-2', credits: 6, course: 'Regular', currentGrade: '4to Cuatrimestre', qualification: '9.1', type: 'Ordinaria', es: ''),
    // Puedes agregar más transacciones de ejemplo aquí para probar el filtro
  ];

  List<Transaction> _filteredTransactions = [];
  String? _selectedPeriod; // Almacena el Año-Cuatrimestre seleccionado

  // Obtener la lista de años-cuatrimestres únicos para el filtro
  // Incluye la opción '--TODOS--' al principio
  List<String> get _uniquePeriods {
    final periods = _allTransactions.map((t) => t.period).toSet().toList();
    periods.sort(); // Opcional: ordenar los periodos alfabéticamente/cronológicamente
    return ['--TODOS--', ...periods];
  }

  // Función para aplicar el filtro
  void _applyFilter() {
    setState(() {
      if (_selectedPeriod == null) {
        // Si no hay selección inicial, la lista sigue vacía (pantalla en blanco)
        _filteredTransactions = [];
      } else if (_selectedPeriod == '--TODOS--') {
        // Si se selecciona "TODOS", muestra todas las transacciones
        _filteredTransactions = _allTransactions;
      } else {
        // Si se selecciona un periodo específico, filtra
        _filteredTransactions = _allTransactions
            .where((transaction) => transaction.period == _selectedPeriod)
            .toList();
      }
    });
  }

  // Método para calcular el promedio general
  double _calculateOverallAverage() {
    if (_filteredTransactions.isEmpty) {
      return 0.0;
    }
    double totalQualifications = 0;
    int count = 0;
    for (var transaction in _filteredTransactions) {
      // Asegúrate de que 'qualification' sea un número. Si es String, conviértelo.
      try {
        totalQualifications += double.parse(transaction.qualification);
        count++;
      } catch (e) {
        // Manejar error si la calificación no es un número válido
        print("Error al parsear calificación: ${transaction.qualification} - $e");
      }
    }
    return count > 0 ? totalQualifications / count : 0.0;
  }


  @override
  Widget build(BuildContext context) {
    // Calcula el promedio antes de construir el widget
    final overallAverage = _calculateOverallAverage();

    return Scaffold(
      appBar: AppBar(
        title: const Text('Expediente del Alumno'), // Título como en la captura
        backgroundColor: Colors.blue, // Barra de aplicación azul
        foregroundColor: Colors.white, // Texto de la barra de aplicación blanco
      ),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: Row(
              children: [
                const Text(
                  'Agrupar por:',
                  style: TextStyle(fontWeight: FontWeight.bold, color: Colors.black87),
                ),
                const SizedBox(width: 8),
                Expanded(
                  child: DropdownButtonFormField<String>(
                    decoration: InputDecoration(
                      labelText: 'Año-Cuatrimestre',
                      border: const OutlineInputBorder(),
                      filled: true,
                      fillColor: Colors.white,
                      labelStyle: TextStyle(color: Colors.blue[800]), // Color del label
                      contentPadding: const EdgeInsets.symmetric(horizontal: 12, vertical: 16),
                    ),
                    value: _selectedPeriod,
                    items: _uniquePeriods.map((String value) {
                      return DropdownMenuItem<String>(
                        value: value,
                        child: Text(value, style: const TextStyle(color: Colors.black87)),
                      );
                    }).toList(),
                    onChanged: (String? newValue) {
                      setState(() {
                        _selectedPeriod = newValue;
                        // Ya no llamamos _applyFilter() aquí, se hará al presionar "BUSCAR"
                      });
                    },
                    hint: const Text('--TODOS--', style: TextStyle(color: Colors.grey)), // Hint inicial
                  ),
                ),
                const SizedBox(width: 16),
                ElevatedButton(
                  onPressed: _selectedPeriod != null ? _applyFilter : null, // Habilitado si se selecciona algo
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.blue.shade700, // Un azul más oscuro para el botón
                    foregroundColor: Colors.white,
                    padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 16),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(8),
                    ),
                  ),
                  child: const Text(
                    'BUSCAR',
                    style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
                  ),
                ),
              ],
            ),
          ),
          Expanded(
            child: _filteredTransactions.isEmpty && _selectedPeriod != '--TODOS--' // Verifica también si no es "TODOS"
                ? Center(
              child: Padding(
                padding: const EdgeInsets.all(20.0),
                child: Text(
                  _selectedPeriod == null
                      ? 'Seleccione un "Año-Cuatrimestre" y presione BUSCAR para ver el expediente.'
                      : 'No hay datos disponibles para el período seleccionado.', // Mensaje más específico
                  textAlign: TextAlign.center,
                  style: TextStyle(fontSize: 18, color: Colors.grey[600]),
                ),
              ),
            )
                : SingleChildScrollView(
              scrollDirection: Axis.horizontal, // Permite scroll horizontal si la tabla es ancha
              child: DataTable(
                headingRowColor: MaterialStateProperty.resolveWith<Color?>(
                        (Set<MaterialState> states) => Colors.blue.shade50), // Fondo azul claro para el encabezado
                dataRowColor: MaterialStateProperty.resolveWith<Color?>(
                        (Set<MaterialState> states) => Colors.white), // Fondo blanco para filas de datos
                border: TableBorder.all(color: Colors.blue.shade100, width: 1.0), // Bordes de tabla
                columnSpacing: 20, // Espacio entre columnas
                horizontalMargin: 16, // Margen horizontal de la tabla
                columns: const <DataColumn>[
                  DataColumn(label: Expanded(child: Text('Clave', style: TextStyle(fontWeight: FontWeight.bold, color: Colors.blue)))),
                  DataColumn(label: Expanded(child: Text('Nombre de Asignatura', style: TextStyle(fontWeight: FontWeight.bold, color: Colors.blue)))),
                  DataColumn(label: Expanded(child: Text('Grado (Plan)', style: TextStyle(fontWeight: FontWeight.bold, color: Colors.blue)))),
                  DataColumn(label: Expanded(child: Text('Periodo', style: TextStyle(fontWeight: FontWeight.bold, color: Colors.blue)))),
                  DataColumn(label: Expanded(child: Text('Créditos', style: TextStyle(fontWeight: FontWeight.bold, color: Colors.blue)))),
                  DataColumn(label: Expanded(child: Text('Curso', style: TextStyle(fontWeight: FontWeight.bold, color: Colors.blue)))),
                  DataColumn(label: Expanded(child: Text('Grado (Cursado)', style: TextStyle(fontWeight: FontWeight.bold, color: Colors.blue)))),
                  DataColumn(label: Expanded(child: Text('Calificación', style: TextStyle(fontWeight: FontWeight.bold, color: Colors.blue)))),
                  DataColumn(label: Expanded(child: Text('Tipo', style: TextStyle(fontWeight: FontWeight.bold, color: Colors.blue)))),
                  DataColumn(label: Expanded(child: Text('Es...', style: TextStyle(fontWeight: FontWeight.bold, color: Colors.blue)))),
                ],
                rows: _filteredTransactions.map((transaction) {
                  return DataRow(cells: <DataCell>[
                    DataCell(Text(transaction.id, style: const TextStyle(color: Colors.black87))),
                    DataCell(Text(transaction.subjectName, style: const TextStyle(color: Colors.black87))),
                    DataCell(Text(transaction.planGrade, style: const TextStyle(color: Colors.black87))),
                    DataCell(Text(transaction.period, style: const TextStyle(color: Colors.black87))),
                    DataCell(Text(transaction.credits.toString(), style: const TextStyle(color: Colors.black87))),
                    DataCell(Text(transaction.course, style: const TextStyle(color: Colors.black87))),
                    DataCell(Text(transaction.currentGrade, style: const TextStyle(color: Colors.black87))),
                    DataCell(Text(transaction.qualification, style: const TextStyle(color: Colors.black87))),
                    DataCell(Text(transaction.type, style: const TextStyle(color: Colors.black87))),
                    DataCell(Text(transaction.es, style: const TextStyle(color: Colors.black87))),
                  ]);
                }).toList(),
              ),
            ),
          ),
          // Espacio para el "Promedio General"
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.end, // Alinea a la derecha
              children: [
                Text(
                  'Promedio General:',
                  style: TextStyle(
                    fontWeight: FontWeight.bold,
                    fontSize: 18,
                    color: Colors.blue[800],
                  ),
                ),
                const SizedBox(width: 10),
                Text(
                  // Muestra el promedio calculado, formateado a dos decimales
                  overallAverage.toStringAsFixed(2),
                  style: const TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.bold,
                    color: Colors.black87,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}