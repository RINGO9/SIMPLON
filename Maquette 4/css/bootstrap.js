// jlabelClose = fermer le formulaire sur le clic jlabel
private void jLabelCloseMouseClicked (java.awt.event.MouseEvent evt) {                                         
    System.exit (0);

}   


// jlabelMin = minimiser la forme lors du clic sur jlabel
private void jLabelMinMouseClicked (java.awt.event.MouseEvent evt) {                                       

    this.setState (JFrame.ICONIFIED);

}


//  jLabelRegister  = ouvrir le formulaire de connexion sur le clic jlabel (sur le formulaire d'inscription)
private void jLabelRegisterMouseClicked (java.awt.event.MouseEvent evt) {                                            
    LoginForm lgf = new LoginForm ();
    lgf.setVisible (vrai);
    lgf.pack ();
    lgf.setLocationRelativeTo (null);
    lgf.setDefaultCloseOperation (JFrame.EXIT_ON_CLOSE);
    this.dispose ();
}

//  jLabelRegister  = ouvrir le formulaire de connexion au clic jlabel  (sur le formulaire de connexion) 
private void jLabelRegisterMouseClicked (java.awt.event.MouseEvent evt) {                                            
    RegisterForm rgf = new RegisterForm ();
    rgf.setVisible (vrai);
    rgf.pack ();
    rgf.setLocationRelativeTo (null);
    rgf.setDefaultCloseOperation (JFrame.EXIT_ON_CLOSE);
   this.dispose ();
}    




////// PRODUCTION : 

// jlabelClose = fermer le formulaire sur le clic jlabel
private void jLabelCloseMouseClicked (java.awt.event.MouseEvent evt) {                                         
        System.exit (0);

    }   


// jlabelMin = minimiser la forme lors du clic sur jlabel
private void jLabelMinMouseClicked (java.awt.event.MouseEvent evt) {                                       

        this.setState (JFrame.ICONIFIED);

    }


//  jLabelRegister  = ouvrir le formulaire de connexion sur le clic jlabel (sur le formulaire d'inscription)
private void jLabelRegisterMouseClicked (java.awt.event.MouseEvent evt) {                                            
        LoginForm lgf = new LoginForm ();
        lgf.setVisible (vrai);
        lgf.pack ();
        lgf.setLocationRelativeTo (null);
        lgf.setDefaultCloseOperation (JFrame.EXIT_ON_CLOSE);
        this.dispose ();
    }

//  jLabelRegister  = ouvrir le formulaire de connexion au clic jlabel  (sur le formulaire de connexion) 
private void jLabelRegisterMouseClicked (java.awt.event.MouseEvent evt) {                                            
        RegisterForm rgf = new RegisterForm ();
        rgf.setVisible (vrai);
        rgf.pack ();
        rgf.setLocationRelativeTo (null);
        rgf.setDefaultCloseOperation (JFrame.EXIT_ON_CLOSE);
       this.dispose ();
    }    




////// PRODUCTION : 

