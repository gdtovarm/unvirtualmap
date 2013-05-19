using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Shapes;
using Microsoft.Phone.Controls;
using AppFinal.Database;

namespace AppFinal
{
    public partial class Registro : PhoneApplicationPage
    {
        public Registro()
        {
            InitializeComponent();
        }

        private void V_M_Click(object sender, RoutedEventArgs e)
        {
            NavigationService.Navigate(new Uri("/MainPage.xaml", UriKind.Relative));
        }

        private void Registra_Click(object sender, RoutedEventArgs e)
        {
            try
            {
                User _Registro;
                    _Registro = new User() { Usuario = txtApodo.Text, Contraseña = txtContraseña.Text };
                    App.db.Usus.InsertOnSubmit(_Registro);
               
                App.db.SubmitChanges();


            }
            catch (Exception eff)
            {
                
                throw eff;
            }
        }


       
    }
}