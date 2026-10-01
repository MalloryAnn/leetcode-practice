class Solution(object):
    def reversePrefix(self, word, ch):
        group = word.find(ch)
        if group == -1:
            return word
        return word[:group +1] [::-1] +word[group +1:]
        