#include <bits/stdc++.h>
using namespace std;

/*
Method: Brute

TC -> O(N2), where N = size of the given array.
Reason: We are using nested loops here and those two loops roughly run for N times.

SC -> O(1) as we are not using any extra space to solve this problem.

*/
int numberOfInversionsBrute(vector<int> &nums) {
  int n = nums.size();
  // Count the number of pairs:
  int cnt = 0;
  for (int i = 0; i < n; i++) {
    for (int j = i + 1; j < n; j++) {
      if (nums[i] > nums[j]) {
        cnt++;
      }
    }
  }

  return cnt;
}

int merge(vector<int> &nums, int low, int mid, int high) {
  vector<int> temp;    // temporary array
  int left = low;      // starting index of left half of array
  int right = mid + 1; // starting index of right half of array

  // modification 1: cnt variable to count the pairs
  int cnt = 0;

  // storing elements in the temporary array in a sorted manner
  while (left <= mid && right <= high) {
    if (nums[left] <= nums[right]) {
      temp.push_back(nums[left]);
      left++;
    } else {
      temp.push_back(nums[right]);
      // modification 2: adding count when each left element is greater than the right element
      cnt += (mid - left + 1);
      right++;
    }
  }

  // if the elements on the left half are still pending
  while (left <= mid) {
    temp.push_back(nums[left]);
    left++;
  }

  // if the elements on the right half are still pending
  while (right <= high) {
    temp.push_back(nums[right]);
    right++;
  }

  // transferring all the elements from temporary array to the required array
  for (int i = low; i <= high; i++) {
    nums[i] = temp[i - low];
  }

  return cnt;
}

int mergeSort(vector<int> &nums, int low, int high) {
  int cnt = 0;
  if (low >= high)
    return cnt;

  int mid = (low + high) / 2;

  cnt += mergeSort(nums, low, mid);      // left half
  cnt += mergeSort(nums, mid + 1, high); // right half
  cnt += merge(nums, low, mid, high);    // merging sorted halves

  return cnt; // modification 3
}

/*
Method: Optimal

TC -> O(N*logN), where N = size of the given array.
Reason: We are not changing the merge sort algorithm except by adding a variable to it. So, the time complexity is as same as the merge sort.

SC -> O(N), as in the merge sort We use a temporary array to store elements in sorted order.
*/
int numberOfInversionsOptimal(vector<int> &nums) {
  int n = nums.size();
  // count the number of pairs
  return mergeSort(nums, 0, n - 1);
}

int main() {
  vector<int> arr = {5, 4, 3, 2, 1};
  // int cnt = numberOfInversionsBrute(arr);
  int cnt = numberOfInversionsOptimal(arr);

  cout << "The number of inversions is: " << cnt << endl;
  return 0;
}