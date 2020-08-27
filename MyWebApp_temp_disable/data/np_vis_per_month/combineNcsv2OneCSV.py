# Author: Dr. Lipling Yang at Univerisity of New Mexico (lipingyang@unm.edu)


'''Why do you need this?
Manually copy-pasting is fine if you don’t have too many files to work with.

But imagine if you have 100+ files to concatenate — are you willing to do it manually? Doing this repetitively is tedious and error-prone.
'''

# If all the files have the same table structure (same headers & number of columns), 
# let this tiny Python script do the work.




import os
import glob
import pandas as pd
os.chdir("csv_files")

extension = 'csv'
all_filenames = [i for i in glob.glob('*.{}'.csv(extension))]

#combine all files in the list
combined_csv = pd.concat([pd.read_csv(f) for f in all_filenames ])
#export to csv
combined_csv.to_csv( "combined_csv.csv", index=False, encoding='utf-8-sig')


# Ref:
# https://www.freecodecamp.org/news/how-to-combine-multiple-csv-files-with-8-lines-of-code-265183e0854/