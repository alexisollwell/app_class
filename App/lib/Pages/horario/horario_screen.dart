import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:printing/printing.dart';
import 'dart:typed_data';

class HorarioScreen extends StatelessWidget {
  const HorarioScreen({Key? key}) : super(key: key);

  Future<void> _descargarPdf() async {
    // Cargar el PDF desde assets
    final ByteData data = await rootBundle.load('assets/horario.pdf');
    final Uint8List bytes = data.buffer.asUint8List();

    // Mostrar el diálogo de descarga o impresión
    await Printing.sharePdf(
      bytes: bytes,
      filename: 'horario.pdf',
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Horario del Alumno'),
      ),
      body: Center(
        child: ElevatedButton(
          onPressed: _descargarPdf,
          child: const Text('Descargar Horario'),
        ),
      ),
    );
  }
}
