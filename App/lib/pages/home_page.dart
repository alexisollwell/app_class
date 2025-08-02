import 'package:cesunapp/Pages/formulario/formulario_actividad_servicio_social.dart';
import 'package:cesunapp/Pages/student_page.dart';
import 'package:flutter/material.dart';
import '/pages/kardex/kardex_screen.dart';
import '/pages/servicios/servicio_comunitario_screen.dart';
import '/pages/servicios/servicio_social_screen.dart';
import '/pages/servicios/practicas_profesionales_screen.dart';
import '/pages/titulacion/titulacion_screen.dart';
import '/pages/horario/horario_screen.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  int _selectedIndex = 0;
  int _careerIndex = 0;
  int _studentLifeIndex = 0;

  static const List<Tab> _careerTabs = [
    Tab(icon: Icon(Icons.schedule), text: 'Horario'),
    Tab(icon: Icon(Icons.list_alt), text: 'Kardex'),
  ];

  static final List<Widget> _careerPages = <Widget>[
    HorarioScreen(),
    KardexScreen(),
  ];

  static const List<Tab> _studentLifeTabs = [
    Tab(icon: Icon(Icons.event), text: 'Servicio Comunitario'),
    Tab(icon: Icon(Icons.group), text: 'Servicio Social'),
    Tab(icon: Icon(Icons.article), text: 'Prácticas Profesionales'),
  ];

  static final List<Widget> _studentLifePages = <Widget>[
    ServicioComunitarioScreen(),
    ServicioSocialScreen(),
    PracticasProfesionalesScreen(),
  ];

  static final List<Widget> _pages = <Widget>[
    SizedBox(),
    SizedBox(),
    TitulacionScreen(),
  ];

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    Widget mainBody;
  if (_selectedIndex == 0) {
    mainBody = DefaultTabController(
      length: _careerTabs.length,
      initialIndex: _careerIndex,
      child: Column(
        children: [
          Container(
            color: Colors.blue[50],
            child: TabBar(
              tabs: _careerTabs,
              labelColor: Colors.blue,
              unselectedLabelColor: Colors.black54,
              indicatorColor: Colors.blue,
              onTap: (index) {
                setState(() {
                  _careerIndex = index;
                });
              },
            ),
          ),
          Expanded(child: _careerPages[_careerIndex]),
        ],
      ),
    );
  } else if (_selectedIndex == 1) {
    mainBody = DefaultTabController(
      length: _studentLifeTabs.length,
      initialIndex: _studentLifeIndex,
      child: Column(
        children: [
          Container(
            color: Colors.blueGrey[50],
            child: TabBar(
              tabs: _studentLifeTabs,
              labelColor: Colors.blueAccent,
              unselectedLabelColor: Colors.black54,
              indicatorColor: Colors.blueAccent,
              onTap: (index) {
                setState(() {
                  _studentLifeIndex = index;
                });
              },
            ),
          ),
          Expanded(child: _studentLifePages[_studentLifeIndex]),
        ],
      ),
    );
  } else {
    mainBody = _pages[_selectedIndex];
  }

  // Usar Stack para superponer el botón solo en Vida estudiantil
  Widget body = Stack(
    children: [
      mainBody,
      if (_selectedIndex == 1)
        Positioned(
          bottom: 10, // Ajusta según el espacio del BottomNavigationBar
          right: 10,
          child: FloatingActionButton.extended(
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(builder: (context) => const FormularioActividadServicioSocial()),
              );
            },
            icon: const Icon(Icons.add_box),
            label: const Text('Actividad'),
            backgroundColor: Colors.blueAccent,
          ),
        ),
    ],
  );

    return Scaffold(
      appBar: AppBar(
        title: const Text('App CESUN'),
        actions: [
          IconButton(
            icon: const Icon(Icons.account_circle),
            tooltip: 'Perfil',
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(builder: (context) => const PerfilUsuarioScreen()),
              );
            },
          ),
        ],
      ),
      body: body,
      bottomNavigationBar: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          BottomNavigationBar(
            currentIndex: _selectedIndex,
            onTap: _onItemTapped,
            items: const [
              BottomNavigationBarItem(
                icon: Icon(Icons.school),
                label: 'Carrera',
              ),
              BottomNavigationBarItem(
                icon: Icon(Icons.school),
                label: 'Vida estudiantil',
              ),
              BottomNavigationBarItem(
                icon: Icon(Icons.school),
                label: 'Titulación',
              ),
            ],
          ),
        ],
      ),
    );
  }
}