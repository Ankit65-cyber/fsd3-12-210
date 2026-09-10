# FIle System (FS MODULE)
- FS module directly communicate with operating system rather than browser

- The common operation on a file or folder are:- 
1. File -> writeFile, ReadFile, AppendFile .  
2. Folder -> mkdir/md, rmdir/rm, reddir .
3. File Stat -> stat, lstat, rstat
4. Watch -> watch, unwatch .
5. Stream -> readStream(), writeStream() .

## all functions are promise so it must be called with await keyword 
1. Append :- if file is not present then it create the file and then write into it , 
and if file already exist then it's just simply add the text into the file without removing the text present in the file 

2. Write :- if file is not present then it creates the file and then write into it and if file is already present then simply remove all the text from the file and then write the text into it 