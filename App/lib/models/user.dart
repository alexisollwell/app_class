class User {
  final String? userName;
  final String pssKey;
  final String email;

  User({
    this.userName,
    required this.pssKey,
    required this.email,
  });

  factory User.fromJson(Map<String, dynamic> json) {
    return User(
      userName: json['userName'] as String?,
      pssKey: json['pssKey'] as String,
      email: json['email'] as String,
    );
  }

  Map<String, dynamic> toJson() => {
        if (userName != null) 'userName': userName,
        'pssKey': pssKey,
        'email': email,
      };
}
