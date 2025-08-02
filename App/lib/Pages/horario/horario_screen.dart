import 'dart:io';
import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart' show rootBundle;
import 'package:syncfusion_flutter_pdfviewer/pdfviewer.dart';
import 'package:path_provider/path_provider.dart';
import 'package:permission_handler/permission_handler.dart';
import 'package:path/path.dart' as p;
import 'package:open_filex/open_filex.dart';

class HorarioScreen extends StatelessWidget {
  const HorarioScreen({super.key});

  final String _assetPath = 'assets/pdfs/horario.pdf';
  final String _fileName = 'horario.pdf';

  Future<void> _downloadAndOpenPdf(BuildContext context) async {
    try {
      // 1. Permisos
      if (Platform.isAndroid) {
        final status = await Permission.manageExternalStorage.request();
        if (!status.isGranted) {
          ScaffoldMessenger.of(context).showSnackBar(
            const SnackBar(content: Text('Permiso de almacenamiento denegado')),
          );
          return;
        }
      }

      // 2. Leer PDF desde assets
      final byteData = await rootBundle.load(_assetPath);
      final Uint8List bytes = byteData.buffer.asUint8List();

      // 3. Ruta de descarga
      String downloadPath;
      if (Platform.isAndroid) {
        final downloadsDir = Directory('/storage/emulated/0/Download');
        if (await downloadsDir.exists()) {
          downloadPath = downloadsDir.path;
        } else {
          final fallback = await getExternalStorageDirectory();
          downloadPath = fallback?.path ?? (await getTemporaryDirectory()).path;
        }
      } else if (Platform.isIOS) {
        final dir = await getApplicationDocumentsDirectory();
        downloadPath = dir.path;
      } else {
        final dir = await getDownloadsDirectory() ?? await getTemporaryDirectory();
        downloadPath = dir.path;
      }

      // 4. Guardar archivo
      final filePath = p.join(downloadPath, _fileName);
      final file = File(filePath);
      await file.writeAsBytes(bytes, flush: true);

      // 5. Mostrar mensaje
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('PDF guardado en: $filePath')),
      );

      // 6. Abrir archivo
      await OpenFilex.open(filePath);
    } catch (e) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Error: $e')),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Horario'),
        actions: [
          IconButton(
            icon: const Icon(Icons.download),
            tooltip: 'Descargar y abrir PDF',
            onPressed: () => _downloadAndOpenPdf(context),
          ),
        ],
      ),
      body: SfPdfViewer.asset(_assetPath),
    );
  }
}
