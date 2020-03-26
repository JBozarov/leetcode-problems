There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5





var findMedianSortedArrays = function(nums1, nums2) {
    var [m1, m2] = []; 
		if (nums1.length===1){
			m1=nums1[0]
		}
		else if (nums1.length>1 && nums1.length%2!==0){
			m1=nums1[Math.floor(nums1.length/2)]
		}
		else if (nums1.length>1 && nums1.length%2===0){
			m1=(nums1[nums1.length/2-1]+nums1[nums1.length/2])/2
		}
		if (nums2.length===1){
			m2=nums2[0]
		}
		else if (nums2.length>1 && nums2.length%2!==0){
			m2=nums2[Math.floor(nums2.length/2)]
		}
		else if (nums2.length>1 && nums2.length%2===0){
			m2=(nums2[nums2.length/2-1]+nums2[nums2.length/2])/2
		}
		if (nums1.length<1) return m2; 
		else if (nums2.length<1) return m1; 
		return (m1+m2)/2;  
};
