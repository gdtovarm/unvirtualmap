using System;
using System.Net;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Documents;
using System.Windows.Ink;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Shapes;

namespace AppFinal.Database
{
    public class UsuarioDatabase
    {
         public static UserContext GetDatabase()
            {
                var context = new UserContext("isostore:/Database.sdf");

                if (!context.DatabaseExists())
                {
                    context.CreateDatabase();
                }

                return context;
            }
   
    }
}
