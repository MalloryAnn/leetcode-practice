int lengthOfLongestSubstring(char* s) {
    int seen[128] = {0};
    int left = 0;
    int maxLength = 0;
    for (int right = 0; s[right] != '\0'; right++) {
        char current = s[right];
        while (seen[current] == 1) {
            seen[s[left]] = 0;
            left++;
        }
        seen[current] = 1;
        int currentLength = right - left + 1;
        
        if (currentLength > maxLength) {
            maxLength = currentLength;
        }
    }
    return maxLength;
}