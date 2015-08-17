#! /usr/bin/env python
# -*- coding: utf-8 -*-
import sys
import argparse
import itertools


def main(argv=sys.argv[1:]):
    parser = argparse.ArgumentParser()
    parser.add_argument('num', type=int)
    args = parser.parse_args(argv)

    num = None
    try:
        for num in itertools.count(start=args.num, step=2):
            if sum(sk for sk in range(1, int(num//2)) if ((num / sk) % 1) == 0) == num:
                print(num)
    except KeyboardInterrupt:
        print('STOP: {}'.format(num))


if __name__ == '__main__':
    sys.exit(main())
