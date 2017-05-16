using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using NUnit.Framework;
namespace TestCase
{
    class NUnitTest
    {
        IWebDriver driver;
        [SetUp]
        public void Initialize()
        {
            driver = new FirefoxDriver();
        }
        [Test]
        public void OpenTestApp()
        {
            driver.Url = "http://localhost:9000/";
        }
        [TearDown]
        public void EndTest()
        {
            driver.Close();
        }

    }
}