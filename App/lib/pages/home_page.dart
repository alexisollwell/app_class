import 'package:flutter/material.dart';
import 'package:cesunapp/pages/servicios/practicas_profesionales_screen.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  int _selectedIndex = 0;

  static const List<Widget> _pages = [
    CareerTabs(),
    StudentLifeTabs(),
    Center(child: Text('Titulación', style: TextStyle(fontSize: 22))),
  ];

  void _onTap(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('App CESUN')),
      body: _pages[_selectedIndex],
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _selectedIndex,
        onTap: _onTap,
        items: const [
          BottomNavigationBarItem(icon: Icon(Icons.school), label: 'Carrera'),
          BottomNavigationBarItem(
            icon: Icon(Icons.group),
            label: 'Vida estudiantil',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.workspace_premium),
            label: 'Titulación',
          ),
        ],
      ),
    );
  }
}

class CareerTabs extends StatelessWidget {
  static const List<Tab> tabs = [
    Tab(icon: Icon(Icons.schedule), text: 'Horario'),
    Tab(icon: Icon(Icons.grade), text: 'Calificaciones'),
    Tab(icon: Icon(Icons.list_alt), text: 'Kardex'),
  ];

  static const List<Widget> pages = [
    Center(child: Text('Horario', style: TextStyle(fontSize: 22))),
    Center(child: Text('Calificaciones', style: TextStyle(fontSize: 22))),
    Center(child: Text('Kardex', style: TextStyle(fontSize: 22))),
  ];

  const CareerTabs({super.key});

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: tabs.length,
      child: Column(
        children: [
          Container(
            color: Colors.blue[50],
            child: TabBar(
              tabs: tabs,
              labelColor: Colors.blue,
              unselectedLabelColor: Colors.black54,
              indicatorColor: Colors.blue,
            ),
          ),
          const Expanded(child: TabBarView(children: pages)),
        ],
      ),
    );
  }
}

class StudentLifeTabs extends StatelessWidget {
  static const List<Tab> tabs = [
    Tab(icon: Icon(Icons.event), text: 'Servicio Comunitario'),
    Tab(icon: Icon(Icons.group), text: 'Servicio Social'),
    Tab(icon: Icon(Icons.article), text: 'Prácticas Profesionales'),
  ];

  static final List<Widget> pages = [
    const Center(
      child: Text('Servicio Comunitario', style: TextStyle(fontSize: 22)),
    ),
    const Center(
      child: Text('Servicio Social', style: TextStyle(fontSize: 22)),
    ),
    const PracticasProfesionalesScreen(),
  ];

  const StudentLifeTabs({super.key});

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: tabs.length,
      child: Column(
        children: [
          Container(
            color: Colors.blueGrey[50],
            child: TabBar(
              tabs: tabs,
              labelColor: Colors.blueAccent,
              unselectedLabelColor: Colors.black54,
              indicatorColor: Colors.blueAccent,
            ),
          ),
          Expanded(child: TabBarView(children: pages)),
        ],
      ),
    );
  }
}
