
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;

namespace TestCase
{
    class Program
    {
        static void Main(string[] args)
        {
            IWebDriver driver = new FirefoxDriver();
            driver.Url = "http://localhost:9000/";
        }
    }
}
