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
        // Constructor
        public MainPage()
        {
            InitializeComponent();
        }

        private void Visitante_Click(object sender, RoutedEventArgs e)
        {
            this.NavigationService.Navigate(new Uri("/Home.xaml", UriKind.Relative));

        }

        private void Registro_Click(object sender, RoutedEventArgs e)
        {
            this.NavigationService.Navigate(new Uri("/Registro.xaml", UriKind.Relative));

        }
      
    }
}