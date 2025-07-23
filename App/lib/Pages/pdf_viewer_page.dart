import 'dart:io';
import 'package:flutter/foundation.dart' show kIsWeb;
import 'package:flutter/material.dart';
import 'package:flutter/services.dart' show rootBundle;
import 'package:path_provider/path_provider.dart';
import 'package:flutter_pdfview/flutter_pdfview.dart';

class PdfViewerPage extends StatefulWidget {
  final String assetPath;
  final String title;

  const PdfViewerPage({
    super.key,
    required this.assetPath,
    required this.title,
  });
  @override
  State<PdfViewerPage> createState() => _PdfViewerPageState();
}

class _PdfViewerPageState extends State<PdfViewerPage> {
  String? localPath;
  bool isLoading = true;

  @override
  void initState() {
    super.initState();
    loadPdfFromAssets();
  }

  Future<void> loadPdfFromAssets() async {
    try {
      if (kIsWeb) {
        setState(() {
          localPath = 'web';
          isLoading = false;
        });
      } else {
        final bytes = await rootBundle.load(widget.assetPath);

        final dir = await getTemporaryDirectory();
        final file = File('${dir.path}/${widget.assetPath.split('/').last}');
        await file.writeAsBytes(bytes.buffer.asUint8List(), flush: true);
        setState(() {
          localPath = file.path;
          isLoading = false;
        });
      }
    } catch (e) {
      debugPrint('❌ Error al cargar PDF desde assets: $e');
      setState(() {
        localPath = null;
        isLoading = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
        backgroundColor: const Color(0xFF0070BA),
      ),
      body: Center(
        child: isLoading
            ? const CircularProgressIndicator()
            : localPath == null
            ? const Text('No se pudo cargar el PDF.')
            : localPath == 'web'
            ? const Padding(
                padding: EdgeInsets.all(24),
                child: Text(
                  '⚠️ La vista de PDF desde assets no está disponible en Flutter Web.\nConsulta el documento desde Android o iOS.',
                  textAlign: TextAlign.center,
                  style: TextStyle(fontSize: 16),
                ),
              )
            : PDFView(filePath: localPath!),
      ),
    );
  }
}
