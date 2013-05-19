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

namespace AppFinal
{
    public partial class MainPage : PhoneApplicationPage
    {
        public static int id;
        public MainPage()
        {
            InitializeComponent();
                      
        }
        
        private void Reg_Click(object sender, RoutedEventArgs e)
        {
            NavigationService.Navigate(new Uri("/Registro.xaml", UriKind.Relative));
        }

        private void Go_in_Click(object sender, RoutedEventArgs e)
        {
            NavigationService.Navigate(new Uri("/Home.xaml", UriKind.Relative));
        }

        private void Entrar_Click(object sender, RoutedEventArgs e)
        {
            try
            {
                bool Con_us = (from Usuarios in App.db.Usus where Usuarios.Usuario.Contains(txtUsuario.Text) select Usuarios).Count() >0;
                bool Con_con = (from Usuarios in App.db.Usus where Usuarios.Contraseña.Contains(txtContraseña.Text) select Usuarios).Count() >0;
                var idd = App.db.Usus.FirstOrDefault(a => a.Usuario == txtUsuario.Text);
               
                int ida;

                if(idd != null)
                {
                 ida = idd.Id_us;
                               

                if ((Con_us = true) && (Con_con = true))
                {
                    id = ida;
                    NavigationService.Navigate(new Uri("/Home.xaml", UriKind.Relative));
                }
                }

            }
            catch (NullReferenceException err)
            {
                throw err;
            }
         
        }

          
    }
}