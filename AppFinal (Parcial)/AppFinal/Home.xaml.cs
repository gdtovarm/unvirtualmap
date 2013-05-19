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
    public partial class Home : PhoneApplicationPage
    {
        public Home()
        {
            InitializeComponent();
        }

        private void Go_Per_Click(object sender, RoutedEventArgs e)
        {
            NavigationService.Navigate(new Uri("/Perola.xaml", UriKind.Relative));
        }

        private void Go_Der_Click(object sender, RoutedEventArgs e)
        {
            NavigationService.Navigate(new Uri("/Derecho.xaml", UriKind.Relative));
        }

        private void Go_Agro_Click(object sender, RoutedEventArgs e)
        {
            NavigationService.Navigate(new Uri("/Agronomia.xaml", UriKind.Relative));
        }

    }
}