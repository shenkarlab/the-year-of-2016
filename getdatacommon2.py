
import urllib2, collections, re, json



webUrl = urllib2.urlopen("https://api.mediacloud.org/api/v2/wc/list?q=media_id:1&stats=1&&fq=publish_date:%5B2016-01-01T00:00:00.000Z+TO+2016-01-07T00:00:00.000Z%5D&key=0fa35f0958f3641747d1a9c46b0b05386501e613ad5a7625ee5bd7016556e579")



def top(data):
    return dict(collections.Counter(data).most_common(50)) #most common words


def strToDict(str):
    d = {}
    count_locs = [m.start() for m in re.finditer('"count"', str)] #find all locations of word "count"
    term_locs = [m.start() for m in re.finditer('"term"', str)] # same for "term"
    if len(count_locs) == len(term_locs): 
        for i in range(len(count_locs)): 
            count = int(str[count_locs[i]+8:str.find(',',count_locs[i])]) #create integer from the data string based on locations. start is based on start index of count and end when we find ','
            word = str[term_locs[i]+8:str.find('}',term_locs[i])-1] #same  - we slice the str based on locations
            d[word] = count  #insert to dict
    return d

if webUrl.getcode() == 200:
    data = webUrl.readlines()
    # print data
    allcommon = strToDict(data[0])
    common = top(allcommon)
    x = json.dumps(common)
    print x
else:
    print "error"
