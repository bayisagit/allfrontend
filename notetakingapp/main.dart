//simple flutter.
// import 'package:flutter/material.dart';


// void main(){
//   runApp(MaterialApp(
//   home:MyHomePage(),
//   ));
// }
// class MyHomePage extends StatefulWidget{
//   @override
//   _MyHomePageState createState() => _MyHomePageState();
// }

// class _MyHomePageState extends State<MyHomePage>{
//   int count =0;
//   @override
//   Widget build(BuildContext context){
//     return Scaffold(
//     appBar: AppBar(
//       title: Text("my first dart"),
//       centerTitle: true,
//     ),
//     body:Column(
//       children:<Widget>[
//         Text(
//           'count: $count',
//         ),
//         Row(
//           mainAxisAlignment: MainAxisAlignment.spaceBetween,
//           children: [
//             Text("hello,world"),
//             Container(
//               color: Colors.cyan,
//               padding: EdgeInsets.all(30.0),
//             ),
//             Text("hello Dagim")
//           ],
//         )
//       ]
//     ),
//     floatingActionButton: FloatingActionButton(
//       child: Icon(Icons.add),
//       onPressed: (){
//         setState((){
//         count++;
//         });
//       },
//     ),
//   );
//   }
// }


// list of items

// import 'package:flutter/material.dart';
// void main(){
//   runApp(MyApp());
// }

// class MyApp extends StatelessWidget{
//   final List<String> items = ['apple','Banana','Orange',"mango"];
//   @override
//   Widget build(BuildContext context){
//     return MaterialApp(
//       home:Scaffold(
//         appBar: AppBar(
//           title: Text('Fruits List'),
//         ),
//         body: ListView.builder(
//           itemCount:items.length,
//           itemBuilder: (context,index){
//             return ListTile(
//               title:Text(items[index]),
//               onTap: (){
//                 ScaffoldMessenger.of(context).showSnackBar(
//                   SnackBar(
//                     content: Text("you selected:${items[index]}"),
//                   ),
//                 );
//               },
//             );
//           }
//         ),
//       ),
//     );
//   }
// }


//calculator



// import 'package:flutter/material.dart';

// void main() {
//   runApp(MyApp());
// }

// class MyApp extends StatefulWidget {
//   @override
//   State<MyApp> createState() => _MyAppState();
// }

// class _MyAppState extends State<MyApp> {
//   TextEditingController num1Controller = TextEditingController();
//   TextEditingController num2Controller = TextEditingController();

//   double result = 0;

//   @override
//   Widget build(BuildContext context) {
//     return MaterialApp(
//       home: Scaffold(
//         appBar: AppBar(
//           title: Text('Arithmetic Calculator'),
//         ),
//         body: Padding(
//           padding: EdgeInsets.all(20),
//           child: Column(
//             mainAxisAlignment: MainAxisAlignment.center,
//             children: [

//               // Input 1
//               TextField(
//                 controller: num1Controller,
//                 keyboardType: TextInputType.number,
//                 decoration: InputDecoration(labelText: 'Enter first number'),
//               ),

//               // Input 2
//               TextField(
//                 controller: num2Controller,
//                 keyboardType: TextInputType.number,
//                 decoration: InputDecoration(labelText: 'Enter second number'),
//               ),

//               SizedBox(height: 20),

//               // Buttons
//               Row(
//                 mainAxisAlignment: MainAxisAlignment.spaceEvenly,
//                 children: [
//                   ElevatedButton(
//                     onPressed: () {
//                       setState(() {
//                         result = double.parse(num1Controller.text) +
//                                  double.parse(num2Controller.text);
//                       });
//                     },
//                     child: Text('Add'),
//                   ),

//                   ElevatedButton(
//                     onPressed: () {
//                       setState(() {
//                         result = double.parse(num1Controller.text) -
//                                  double.parse(num2Controller.text);
//                       });
//                     },
//                     child: Text('Subtract'),
//                   ),
//                 ],
//               ),

//               SizedBox(height: 10),

//               Row(
//                 mainAxisAlignment: MainAxisAlignment.spaceEvenly,
//                 children: [
//                   ElevatedButton(
//                     onPressed: () {
//                       setState(() {
//                         result = double.parse(num1Controller.text) *
//                                  double.parse(num2Controller.text);
//                       });
//                     },
//                     child: Text('Multiply'),
//                   ),

//                   ElevatedButton(
//                     onPressed: () {
//                       setState(() {
//                         result = double.parse(num1Controller.text) /
//                                  double.parse(num2Controller.text);
//                       });
//                     },
//                     child: Text('Divide'),
//                   ),
//                 ],
//               ),

//               SizedBox(height: 20),

//               // Result display
//               Text(
//                 'Result: $result',
//                 style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold),
//               ),
//             ],
//           ),
//         ),
//       ),
//     );
//   }
// }

//login app

import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(home: LoginPage()));

class LoginPage extends StatelessWidget {
  final TextEditingController email = TextEditingController();
  final TextEditingController password = TextEditingController();

  @override
  Widget build(BuildContext context) {
    void login() {
      showDialog(
        context: context,
        builder: (_) => AlertDialog(
          title: Text(email.text == 'admin' && password.text == '123'
              ? 'Success'
              : 'Error'),
          content: Text(email.text == 'admin' && password.text == '123'
              ? 'Login successful!'
              : 'Wrong email or password'),
          actions: [
            TextButton(
                onPressed: () => Navigator.pop(context), child: Text('OK'))
          ],
        ),
      );
    }

    return Scaffold(
      appBar: AppBar(title: Text('Login Page')),
      body: Padding(
        padding: EdgeInsets.all(20),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            TextField(
              controller: email,
              decoration: InputDecoration(hintText: 'Email'),
            ),
            TextField(
              controller: password,
              obscureText: true,
              decoration: InputDecoration(hintText: 'Password'),
            ),
            SizedBox(height: 20),
            ElevatedButton(onPressed: login, child: Text('LOGIN')),
          ],
        ),
      ),
    );
  }
}
