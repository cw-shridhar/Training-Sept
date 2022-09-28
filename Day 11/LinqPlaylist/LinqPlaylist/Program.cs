using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LinqPlaylist
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //Console.WriteLine("hello linq");
            //Console.ReadLine();

            // #1 Class Extention Method
                //string s = "shridhar";
            /******** 
             * This is normal method without extention
             * Just create class and add that method
                string res = StringHelper.ChangeFirstLetterCase(s);
            Console.WriteLine(res);
             */

            /*
             * This is using Extention
            string res = s.ChangeFirstLetterCase();
            Console.WriteLine(res);
             */

            // without linq - smallest even number
            //int[] Numbers = {1,2, 3, 4, 5 };
            //int? res = null;
            //foreach(int i in Numbers)
            //{
            //    if(i%2 == 0)
            //    {
            //        if (res == null || i < res)
            //        {
            //            res = i;
            //        }
            //    }
            //}
            //Console.WriteLine(res);

            // with linq
            //int result = Numbers.Where(x => x%2 == 0).Min();
            //Console.WriteLine(result);

            // without linq - country with smallest length;
            //string[] countries = { "India", "USA", "UK" };
            //int res = 100000;

            //foreach(string s in countries)
            //{
            //    if(s.Length < res)
            //    {
            //        res = s.Length;
            //    }
            //}

            //Console.WriteLine(res);


            //with 
            //Console.WriteLine(countries.Min(country => country.Length));


        }
    }
}
