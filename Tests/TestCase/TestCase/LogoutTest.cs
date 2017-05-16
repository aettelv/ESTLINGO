using System;
using System.Collections.Generic;
using System.Linq;
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;

namespace TestCase
{
    class LogoutTest
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
            driver.FindElement(By.Id("username")).SendKeys("test");
            driver.FindElement(By.Id("password")).SendKeys("test");
            driver.FindElement(By.XPath("//input[@value = 'Log in']")).Submit();

            driver.FindElement(By.XPath("//input[@value = 'Log out']")).Submit();

        }
        [TearDown]
        public void EndTest()
        {
            driver.Close();
        }
    }
}
