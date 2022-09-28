using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace Tutorial
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // #1
            //Console.WriteLine("Hello C++");
            //Console.ReadLine();

            // #2
            /*
            Integer - int a; 4butes
            long - 8 bytes
            double - 8 bytes
            float b; 4bytes
            char c; 2bytes
            bool isGreat = true; 1bit
            string s = "shridhar"; 2 bytes per character
            string s = Console.ReadLine();
            Console.WriteLine(s);
             */

            // #3
            /*
             int a = 4;
            // float b = 24.4; // this will give error, since C# is type safe language
            float b = 24.4F; // this will give error
            double c = 12.5;
            // by default decimal number is in double
             */

            // #4
            /*
             There are 2 types of casting
            1. implicit casting
            char to int to long to float to double (C# does it automatically)
            2. explicit casting
             we have to do it manually
            int a = (int)4.5;
            float b = Convert.ToInt32(3.55);
            Console.WriteLine(a);
             */

            // #5 taking input
            Console.WriteLine("enter a number : ");
            int a = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("enter a number : ");
            int b = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine(a + b);
            Console.ReadLine();
        }
    }
}
