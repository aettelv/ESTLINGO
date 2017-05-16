using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using System;

namespace TestCase
{
    class TestLogin
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
            Login();
        }

        [TearDown]
        public void EndTest()
        {
            driver.Close();
        }
        public static void Login()
        {
            IWebDriver driver;
            driver = new FirefoxDriver();
            driver.Url = "http://localhost:9000/";
            driver.Manage().Timeouts().ImplicitlyWait(TimeSpan.FromSeconds(10));
            driver.FindElement(By.Id("username")).SendKeys("test");
            driver.FindElement(By.Id("password")).SendKeys("test");
            driver.FindElement(By.XPath("//input[@value = 'Log in']")).Submit();
        }

    }
}
