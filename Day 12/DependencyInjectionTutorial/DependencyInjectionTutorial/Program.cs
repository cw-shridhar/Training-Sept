using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DependencyInjectionTutorial
{
    public interface IAccount
    { 
        void PrintDetails();
    }
    class CurrentAccount : IAccount
    {
        public void PrintDetails()
        {
            Console.WriteLine("Details of Current Account");
        }
    }

    class SavingAccount : IAccount
    {
        public void PrintDetails()
        {
            Console.WriteLine("Details of Saving Account");
        }
    }

    class Account
    {
        private IAccount account;
        public Account(IAccount account) // parametarized constructor
        {
            this.account = account;
        }

        public void PrintAccounts()
        {
            account.PrintDetails(); 
        }
    }
    internal class Program
    {
        static void Main(string[] args)
        {
            IAccount sa = new SavingAccount();
            IAccount ca = new CurrentAccount();

            Account a = new Account(ca);
            Account b = new Account(sa);
            a.PrintAccounts();
            b.PrintAccounts();

            Console.ReadLine();
        }
    }
}
