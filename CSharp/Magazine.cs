static void checkMagazine(string[] magazine, string[] note)
  {
      if(magazine == null || note == null) Console.WriteLine("No");

      var noteWords = new Dictionary<string, int>();

      string currentWord;

      for(int i = 0; i < note.Length; i++)
      {
          if(noteWords.ContainsKey(note[i]))
          {
              noteWords[note[i]] += 1;
          }
          else
          {
              noteWords[note[i]] = 1;
          }
      }

      for(int i = 0; i < magazine.Length; i++)
      {
          currentWord = magazine[i];

          if(noteWords.ContainsKey(currentWord))
          {
              noteWords[currentWord] -= 1;

              if(noteWords[currentWord] <= 0)
              {
                  noteWords.Remove(currentWord);
              }
          }
      }

      if(noteWords.Count == 0)
      {
          Console.WriteLine("Yes");
      }
      else
      {
          Console.WriteLine("No");
      }


  }
