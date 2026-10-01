class Solution(object):
    def areAlmostEqual(self, s1, s2):
        differences = []
        for i in range(len(s1)):
            if s1[i] != s2[i]:
                differences.append(i)
        if len(differences)== 0:
            return True
        if len(differences) != 2:
            return False
        i,j =differences
        return s1[i] == s2[j] and s1[j] == s2[i]
        