using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using System;

namespace TestCase
{
    class TestElement
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
            driver.Manage().Timeouts().ImplicitlyWait(TimeSpan.FromSeconds(10));

            bool UsernameStatus = driver.FindElement(By.XPath("//*[@id='username']")).Selected;
            bool passwordStatus = driver.FindElement(By.XPath("//*[@id='password']")).Selected;
        }

        [TearDown]
        public void EndTest()
        {
            driver.Close();
        }

    }
}
