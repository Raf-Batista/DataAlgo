public class Solution
{
    public int[] TwoSum(int[] nums, int target)
    {

        var numsHash = new Dictionary<int, int>();
        int currentNum;

        for(var i = 0; i < nums.Length; i++)
        {
           currentNum = target - nums[i];

           if(numsHash.ContainsKey(currentNum))
           {
               return new int[] {numsHash[currentNum], i};
           }
            numsHash.Add(nums[i], i);
        }

       return nums;
    }
}
