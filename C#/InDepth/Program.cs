using System;

namespace CSharpHelloWorld
{
    class HelloWorld
    {
        static void Main(string[] args)
        {
            // One line comment
            /*
             * Multiline comment
             */
            Console.WriteLine("Hello C#!");

            string myString = "New string";

            Console.WriteLine(myString);

            int myInt = 0;
            Console.WriteLine(myInt);

            float newFloat = 5.2f;
            Console.WriteLine(newFloat);

            double newDouble = 0.1;
            Console.WriteLine(newDouble);

            Console.WriteLine(myInt + newDouble + newFloat);

            dynamic newDynamic = 4;
            Console.WriteLine(newDynamic);
            newDynamic = "Changed type dynamic";
            Console.WriteLine(newDynamic);

            // C# is able to infere the type if you put var
            // var string is redundant and it doesn't like it
            var phrase = "new phrase";
            Console.WriteLine(phrase);
        }
    }
}
