import 'dart:io';
import 'package:flutter/foundation.dart' show kIsWeb;
import 'package:flutter/material.dart';
import 'package:flutter/services.dart' show rootBundle;
import 'package:flutter_pdfview/flutter_pdfview.dart';
import 'package:path_provider/path_provider.dart';
import 'package:url_launcher/url_launcher.dart';

class PDFViewerPage extends StatefulWidget {
  final String assetPath;
  final String title;

  const PDFViewerPage({
    super.key,
    required this.assetPath,
    required this.title,
  });

  @override
  State<PDFViewerPage> createState() => _PDFViewerPageState();
}

class _PDFViewerPageState extends State<PDFViewerPage> {
  String? localPath;

  @override
  void initState() {
    super.initState();
    if (kIsWeb) {
      _openInWebTab();
    } else {
      _loadPdfFromAssets();
    }
  }

  Future<void> _openInWebTab() async {
    final uri = Uri.dataFromString(
      await rootBundle.loadString(widget.assetPath),
      mimeType: 'application/pdf',
    );
    if (await canLaunchUrl(uri)) {
      await launchUrl(uri);
    }
    Navigator.of(context).pop(); // opcional: cierra la vista después
  }

  Future<void> _loadPdfFromAssets() async {
    final bytes = await rootBundle.load(widget.assetPath);
    final dir = await getTemporaryDirectory();
    final file = File('${dir.path}/${widget.assetPath.split('/').last}');
    await file.writeAsBytes(bytes.buffer.asUint8List(), flush: true);
    setState(() {
      localPath = file.path;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(widget.title)),
      body: localPath == null
          ? const Center(child: CircularProgressIndicator())
          : PDFView(filePath: localPath!),
    );
  }
}
