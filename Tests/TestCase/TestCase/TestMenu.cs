using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using System;

namespace TestCase
{
    class TestMenu
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

            bool HomeStatus = driver.FindElement(By.XPath("//li[contains(., 'Home')]")).Selected;
            bool GameStatus = driver.FindElement(By.XPath("//li[contains(., 'Games')]")).Selected;
            bool AboutStatus = driver.FindElement(By.XPath("//li[contains(., 'About')]")).Selected;
        }

        [TearDown]
        public void EndTest()
        {
            driver.Close();
        }
    }
}
