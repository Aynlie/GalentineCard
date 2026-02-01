import imageio.v3 as iio

filenames = ['1.jpg', '2.jpg']
images = []

for filename in filenames:
    images.append(iio.imread(filename))
    iio.imwrite('output.gif', images, duration=500,loop = 0)

