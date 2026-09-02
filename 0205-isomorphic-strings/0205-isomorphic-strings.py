class Solution(object):
    def isIsomorphic(self, s, t):
        mapping = {}
        used = set()
        for i in range(len(s)):
            if s[i] in mapping:
                if mapping[s[i]] != t[i]:
                    return False
            else:
                if t[i] in used:
                    return False
                mapping[s[i]] = t[i]
                used.add(t[i])
        return True
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        