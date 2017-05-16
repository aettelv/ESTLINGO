using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using System;

namespace TestCase
{
    class GoPlayTest
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

            driver.FindElement(By.XPath("//li[contains(., 'Games')]")).Click();
            driver.FindElement(By.XPath("/html/body/router-view/div/div/div/a[1]")).Click();
            driver.FindElement(By.XPath("/html/body/router-view/div/div/div/a[2]")).Click();

        }

        [TearDown]
        public void EndTest()
        {
            driver.Close();
        }
    }
}
