using System;
using System.Net;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Documents;
using System.Data.Linq;
using System.Data.Linq.Mapping;
using System.Collections.Generic;
using System.ComponentModel;


namespace AppFinal.Database
{
    [Table]
    public class User
    {
        [Column(IsDbGenerated = true, IsPrimaryKey = true)]
        public int Id_us{ get; set; }

        [Column(CanBeNull = false)]
        public string Contraseña { get; set; }

        [Column(CanBeNull = false)]
        public string Usuario{ get; set; }

    }


    [Table]
    public class Memos
    {
        [Column(IsDbGenerated = true, IsPrimaryKey = true)]
        public int Id_us { get; set; }

        [Column(CanBeNull = false)]
        public string Punto { get; set; }

        [Column(CanBeNull = true)]
        public string Memosu { get; set; }

       

    }

}
