# https://www.hackerrank.com/challenges/recursive-digit-sum/problem
# We define super digit of an integer  using the following rules:
#
# Given an integer, we need to find the super digit of the integer.
#
# If  has only  digit, then its super digit is .
# Otherwise, the super digit of  is equal to the super digit of the sum of the digits of .
# For example, the super digit of  will be calculated as:
#
# 	super_digit(9875)   	9+8+7+5 = 29
# 	super_digit(29) 	2 + 9 = 11
# 	super_digit(11)		1 + 1 = 2
# 	super_digit(2)		= 2
# You are given two numbers  and . The number  is created by concatenating the string   times. Continuing the above example where , assume your value . Your initial  (spaces added for clarity).
#
#     superDigit(p) = superDigit(9875987598759875)
#                   5+7+8+9+5+7+8+9+5+7+8+9+5+7+8+9 = 116
#     superDigit(p) = superDigit(116)
#                   1+1+6 = 8
#     superDigit(p) = superDigit(8)
# All of the digits of  sum to . The digits of  sum to .  is only one digit, so it's the super digit.
import math
import os
import random
import re
import sys

# Complete the superDigit function below.
def superDigit(n, k):
    big_num = str(n) * k
    while len(big_num) > 1:
        sum = 0
        for digit in big_num:
            sum += int(digit)
        print(sum)
        big_num = str(sum)
    return big_num

# above works for small numbers

def superDigit(n, k):
    answer = n * k % 9
    print(answer if answer else 9)
    return answer if answer else 9
# superDigit(123, 3) # => 9
superDigit(7404954009694227446246375747227852213692570890717884174001587537145838723390362624487926131161112710589127423098959327020544003395792482625191721603328307774998124389641069884634086849138515079220750462317357487762780480576640689175346956135668451835480490089962406773267569650663927778867764315211280625033388271518264961090111547480467065229843613873499846390257375933040086863430523668050046930387013897062106309406874425001127890574986610018093859693455518413268914361859000614904461902442822577552997680098389183082654625098817411306985010658756762152160904278169491634807464356130877526392725432086439934006728914411061861235300979536190100734360684054557448454640750198466877185875290011114667186730452681943043971812380628117527172389889545776779555664826488520325234792648448625225364535053605515386730925070072896004645416713682004600636574389040662827182696337187610904694029221880801372864040345567230941110986028568372710970460116491983700312243090679537497139499778923997433720159174153, 100000)

# I'm not sure why this isn't working.. seems like the results were supposed to convert to string somewhere??
