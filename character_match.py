# Don't forget to run the tests (and create some of your own)
# Part 1
def is_character_match(string1, string2):
    string1 = string1.lower().replace(' ', '')
    string2 = string2.lower().replace(' ','')
    s1 = ''.join(sorted(string1))
    s2 = ''.join(sorted(string2))
    if s1 == s2:
        return True
    return False
# Part 2
def anagrams_for(word, list_of_words):
    word = word.lower()
    s1 = ''.join(sorted(word))
    my_dict = {}
    for x in list_of_words:
        new_word = ''.join(sorted(x))
        my_dict[x] = new_word
    result = []
    for key in my_dict:
        if s1 == my_dict[key]:
            result.append(key)
    return result
