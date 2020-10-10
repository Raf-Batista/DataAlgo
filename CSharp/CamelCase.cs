static int camelcase(string s)
  {
      if(s.Length == 0) return 0;

      var totalWords = 1;

      char letter;

      for(var i = 0; i < s.Length; i++)
      {
          letter = s[i];
          if(Char.IsUpper(letter))
          {
              totalWords += 1;
          }
      }

      return totalWords;
  }
