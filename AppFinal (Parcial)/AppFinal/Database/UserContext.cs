using System;
using System.Net;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Documents;
using System.ComponentModel;
using System.Windows.Input;

using System.Data.Linq;
using System.Collections.Generic;

namespace AppFinal.Database
{
    public class UserContext : DataContext
    {
        public Table<User> Usus;
        public Table<Memos> Notas;

        public UserContext(string connectionString)
            : base(connectionString)
        { }

    }
}
