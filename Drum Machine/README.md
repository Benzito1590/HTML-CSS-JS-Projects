# A Doc Holiday Soundboard

See this soundboard at work here:

https://iarobinson.github.io/doc-holiday-soundboard/

This is a project to fulfill one of the front end development projects which make up the Free Code Camp curriculum.

Because this is a single page application, I think it makes most sense to build it with a very simple, 'boilerplate' type front end framework. I'll us Skeleton as it's mobile responsive and very light. Also, I plan to use vanilla JavaScript at this point because I think the application is quite simple and keeping it as 'bare bones' as possible seems more elegant.

![Image of Doc Holiday in Tombstone](https://github.com/iarobinson/drumMachine/blob/master/library/image/docHolidaySoundBoard.jpg)

## Tombstone and Doc Holiday

This project was initially supposed to be a drum board.

While searching for interesting drum beats, my mind raced to these old radio shows where the hosts would prank call people using a touch interface where the bord would play soundclips from different movies. These DJs on the radio would get a board of Swartzenegger quotes and use them to have conversations with random people over the phone. That is funny.

So I decided to make this work as a Doc Holiday from Tombstone impersonation tool.

### Techncial Process for Procuring Soundclips

I used the screen recording software ScreenFlow to pull the clips from YouTube. ScreenFlow only exports audio using lossless .aiff files. These files are about 500 kb per second so they are far larger than they need to be.

To shrink them down, I used Audacity to re-export the files to .mp3 files at 64kbps. This shrunk the file size of the audio files from around 500 kb to around 50kb.

## Thank you

Thank you to to dhg (github.com/dhg) for the Skeleton framework.
https://github.com/dhg/Skeleton