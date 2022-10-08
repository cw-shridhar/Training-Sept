using System;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.IO;
using System.Threading.Tasks;


namespace AsyncAwaitProject
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }


        private int CountCharacters()
        {
            int count = 0;
            using (StreamReader reader = new StreamReader("C:\\data\\data.txt"))
            {
                string content = reader.ReadToEnd();
                count = content.Length;
                Thread.Sleep(5000);
            }
            return count;
        }


        private async void btnProcessFile_Click(object sender, EventArgs e)
        {
            Task<int> task = new Task<int>(CountCharacters);
            task.Start();
            lblCount.Text = "please wait! processing file";
            int count = await task;
            lblCount.Text = count.ToString() + " characters in file";
        }
    }
}
