# this py script is used to rename the "key" "value" in the json file using d3.nest.
# Author: Dr. Liping Yang at Univerisity of New Mexico (lipingyang@unm.edu)


RenamedJSON = ""
# with open('data_2level.json') as f:
with open('data_3level.json') as f:
    for line in f:
        if 'key": ' in line:
            line = line.replace('"key": ','')
            line = line.replace(',\n','')
        elif '"values"' in line:
            line = line.replace('"values"','')
            line = line.lstrip() #trim Whitespace on the left side. use .strip() for both sides and rstrip() for right side
        RenamedJSON = RenamedJSON + line


print(RenamedJSON)
  
with open('RenamedKeysJSON.json', 'w') as outfile:
    outfile.write(RenamedJSON)



