import React from "react";
import { Flex, IconButton, Text, Tooltip } from "@chakra-ui/react";
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  ChevronRightIcon,
  ChevronLeftIcon
} from "@chakra-ui/icons";

const Pager = ({
  canPreviousPage,
  previousPage,
  pageIndex,
  pageOptions,
  canNextPage,
  nextPage,
  gotoPage,
  pageCount
}) => (
  <Flex justifyContent="center" m={4} alignItems="center">
    <Flex>
      <Tooltip label="First Page">
        <IconButton
          onClick={() => gotoPage(0)}
          isDisabled={!canPreviousPage}
          icon={<ArrowLeftIcon h={3} w={3} />}
          mr={4}
        />
      </Tooltip>
      <Tooltip label="Previous Page">
        <IconButton
          onClick={previousPage}
          isDisabled={!canPreviousPage}
          icon={<ChevronLeftIcon h={6} w={6} />}
        />
      </Tooltip>
    </Flex>

    <Flex alignItems="center">
      <Text flexShrink="0" mx={8}>
        Page{" "}
        <Text fontWeight="bold" as="span">
          {pageIndex + 1}
        </Text>{" "}
        /{" "}
        <Text fontWeight="bold" as="span">
          {pageOptions.length}
        </Text>
      </Text>
    </Flex>

    <Flex>
      <Tooltip label="Next Page">
        <IconButton
          onClick={nextPage}
          isDisabled={!canNextPage}
          icon={<ChevronRightIcon h={6} w={6} />}
        />
      </Tooltip>
      <Tooltip label="Last Page">
        <IconButton
          onClick={() => gotoPage(pageCount - 1)}
          isDisabled={!canNextPage}
          icon={<ArrowRightIcon h={3} w={3} />}
          ml={4}
        />
      </Tooltip>
    </Flex>
  </Flex>
);

export default Pager;
