import 'package:flutter/material.dart';

class Kardex {
  final String id;
  final String subjectName;
  final String planGrade;
  final String period;
  final int credits;
  final String course;
  final String currentGrade;
  final String qualification;
  final String type;
  final String es;

  Kardex({
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

class KardexScreen extends StatefulWidget {
  const KardexScreen({super.key});

  @override
  State<KardexScreen> createState() => _KardexScreenState();
}

class _KardexScreenState extends State<KardexScreen> {
  final List<Kardex> _allKardex = [
    Kardex(id: 'ING001', subjectName: 'Matemáticas I', planGrade: '1er Semestre', period: '2024-1', credits: 6, course: 'Regular', currentGrade: '1er Semestre', qualification: '9.0', type: 'Ordinaria', es: ''),
    Kardex(id: 'FIS002', subjectName: 'Física General', planGrade: '1er Semestre', period: '2024-1', credits: 6, course: 'Regular', currentGrade: '1er Semestre', qualification: '8.5', type: 'Ordinaria', es: ''),
    Kardex(id: 'PRG003', subjectName: 'Programación Básica', planGrade: '2do Semestre', period: '2024-2', credits: 7, course: 'Regular', currentGrade: '2do Semestre', qualification: '9.5', type: 'Ordinaria', es: ''),
    Kardex(id: 'CAL004', subjectName: 'Cálculo Diferencial', planGrade: '2do Semestre', period: '2024-2', credits: 6, course: 'Regular', currentGrade: '2do Semestre', qualification: '7.8', type: 'Ordinaria', es: ''),
    Kardex(id: 'ALG005', subjectName: 'Álgebra Lineal', planGrade: '3er Cuatrimestre', period: '2025-1', credits: 6, course: 'Regular', currentGrade: '3er Cuatrimestre', qualification: '9.2', type: 'Ordinaria', es: ''),
    Kardex(id: 'RED006', subjectName: 'Redes de Computadoras', planGrade: '3er Cuatrimestre', period: '2025-1', credits: 5, course: 'Regular', currentGrade: '3er Cuatrimestre', qualification: '8.0', type: 'Ordinaria', es: ''),
    Kardex(id: 'DBA007', subjectName: 'Bases de Datos', planGrade: '4to Cuatrimestre', period: '2025-2', credits: 7, course: 'Regular', currentGrade: '4to Cuatrimestre', qualification: '8.9', type: 'Ordinaria', es: ''),
    Kardex(id: 'SOF008', subjectName: 'Ingeniería de Software', planGrade: '4to Cuatrimestre', period: '2025-2', credits: 6, course: 'Regular', currentGrade: '4to Cuatrimestre', qualification: '9.1', type: 'Ordinaria', es: ''),
  ];

  String? _selectedPeriod;

  List<String> get _uniquePeriods {
    final periods = _allKardex.map((t) => t.period).toSet().toList();
    periods.sort();
    return ['--TODOS--', ...periods];
  }

  void _applyFilter(String? period) {
    setState(() {
      _selectedPeriod = period;
    });
  }

  double _calculateAverage(List<Kardex> kardexList) {
    if (kardexList.isEmpty) return 0.0;
    double total = 0;
    int count = 0;
    for (var k in kardexList) {
      try {
        total += double.parse(k.qualification);
        count++;
      } catch (_) {}
    }
    return count > 0 ? total / count : 0.0;
  }

  @override
  Widget build(BuildContext context) {
    List<Kardex> filteredKardex;
    if (_selectedPeriod == null || _selectedPeriod == '--TODOS--') {
      filteredKardex = _allKardex;
    } else {
      filteredKardex = _allKardex.where((k) => k.period == _selectedPeriod).toList();
    }

    // Agrupar por periodo
    Map<String, List<Kardex>> periodGroups = {};
    for (var k in filteredKardex) {
      periodGroups.putIfAbsent(k.period, () => []).add(k);
    }

    double overallAverage = _calculateAverage(filteredKardex);

    return Scaffold(
      appBar: AppBar(
        title: const Text('Expediente del Alumno'),
        backgroundColor: Colors.blue[800],
        foregroundColor: Colors.white,
      ),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: Row(
              children: [
                const Text('Agrupar por:', style: TextStyle(fontWeight: FontWeight.bold, color: Colors.black87)),
                const SizedBox(width: 8),
                Expanded(
                  child: DropdownButtonFormField<String>(
                    decoration: const InputDecoration(
                      labelText: 'Año-Cuatrimestre',
                      border: OutlineInputBorder(),
                      filled: true,
                      fillColor: Colors.white,
                      contentPadding: EdgeInsets.symmetric(horizontal: 12, vertical: 16),
                    ),
                    value: _selectedPeriod,
                    items: _uniquePeriods.map((String value) {
                      return DropdownMenuItem<String>(
                        value: value,
                        child: Text(value, style: const TextStyle(color: Colors.black87)),
                      );
                    }).toList(),
                    onChanged: _applyFilter,
                    hint: const Text('--TODOS--', style: TextStyle(color: Colors.grey)),
                  ),
                ),
              ],
            ),
          ),
          Expanded(
            child: filteredKardex.isEmpty
                ? const Center(child: Text('No hay datos disponibles para el período seleccionado.'))
                : SingleChildScrollView(
              child: Column(
                children: periodGroups.entries.map((entry) {
                  final period = entry.key;
                  final kardexList = entry.value;
                  final periodAverage = _calculateAverage(kardexList);

                  return Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Container(
                        margin: const EdgeInsets.only(top: 5, bottom: 5),
                        padding: const EdgeInsets.symmetric(vertical: 8, horizontal: 16),
                        color: Colors.blue[100],
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Text(
                              'Periodo: $period',
                              style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16, color: Colors.blue),
                            ),
                            Text(
                              'Promedio: ${periodAverage.toStringAsFixed(2)}',
                              style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16, color: Colors.black87),
                            ),
                          ],
                        ),
                      ),
                      SingleChildScrollView(
                        scrollDirection: Axis.horizontal,
                        child: DataTable(
                          headingRowColor: MaterialStateProperty.resolveWith<Color?>(
                                  (_) => Colors.blue[200]),
                          dataRowColor: MaterialStateProperty.resolveWith<Color?>(
                                  (_) => Colors.white),
                          border: TableBorder.all(color: Colors.blue.withOpacity(0.2), width: 1.0),
                          columnSpacing: 20,
                          horizontalMargin: 16,
                          columns: const <DataColumn>[
                            DataColumn(label: Expanded(child: Text('Clave', style: TextStyle(fontWeight: FontWeight.bold, color: Colors.blue)))),
                            DataColumn(label: Expanded(child: Text('Nombre de Asignatura', style: TextStyle(fontWeight: FontWeight.bold, color: Colors.blue)))),
                            DataColumn(label: Expanded(child: Text('Grado (Plan)', style: TextStyle(fontWeight: FontWeight.bold, color: Colors.blue)))),
                            DataColumn(label: Expanded(child: Text('Créditos', style: TextStyle(fontWeight: FontWeight.bold, color: Colors.blue)))),
                            DataColumn(label: Expanded(child: Text('Curso', style: TextStyle(fontWeight: FontWeight.bold, color: Colors.blue)))),
                            DataColumn(label: Expanded(child: Text('Grado (Cursado)', style: TextStyle(fontWeight: FontWeight.bold, color: Colors.blue)))),
                            DataColumn(label: Expanded(child: Text('Calificación', style: TextStyle(fontWeight: FontWeight.bold, color: Colors.blue)))),
                            DataColumn(label: Expanded(child: Text('Tipo', style: TextStyle(fontWeight: FontWeight.bold, color: Colors.blue)))),
                            DataColumn(label: Expanded(child: Text('Es...', style: TextStyle(fontWeight: FontWeight.bold, color: Colors.blue)))),
                          ],
                          rows: kardexList.map((kardex) {
                            return DataRow(
                              cells: <DataCell>[
                                DataCell(Text(kardex.id)),
                                DataCell(Text(kardex.subjectName)),
                                DataCell(Text(kardex.planGrade)),
                                DataCell(Text(kardex.credits.toString())),
                                DataCell(Text(kardex.course)),
                                DataCell(Text(kardex.currentGrade)),
                                DataCell(Text(kardex.qualification)),
                                DataCell(Text(kardex.type)),
                                DataCell(Text(kardex.es)),
                              ],
                            );
                          }).toList(),
                        ),
                      ),
                      const SizedBox(height: 5),
                    ],
                  );
                }).toList(),
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                const Text('Promedio General:', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 18, color: Colors.blue)),
                const SizedBox(width: 10),
                Text(overallAverage.toStringAsFixed(2), style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: Colors.black87)),
              ],
            ),
          ),
        ],
      ),
    );
  }
}